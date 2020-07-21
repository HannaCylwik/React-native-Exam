import * as React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

import {useAsyncStorage} from '../hooks/useAsyncStorage';
import type from './TypesView';
import AnimatedBar from '../components/AnimatedBar';

const DetailsView = ({route}) => {
  const {name} = route.params;
  const [detailsSource] = useAsyncStorage(`@pokeDex_details_${name}`);
  if (!detailsSource) return <ActivityIndicator />;
  const img = detailsSource.sprites.front_default;
  const backImg = detailsSource.sprites.back_default;

  // let press = true;
  // let imgUri;
  // const img = detailsSource.sprites.front_default;
  // const backImg = detailsSource.sprites.back_default;
  // const onPressChange = () => {
  //   if (press === true) {
  //     press = false;
  //     imgUri = detailsSource.sprites.front_default;
  //   }
  //   if (press === false) {
  //     press = true;
  //     imgUri = detailsSource.sprites.back_default;
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.pokeContainer}>
        <Image style={styles.image} source={{uri: img}} />
        <Image style={styles.image} source={{uri: backImg}} />
      </View>
      <View style={styles.typeTxt}>
        <Text style={{marginTop: 15, height: 50, fontSize: 23}}>{name}</Text>
        <Image
          style={styles.typeImg}
          source={type(detailsSource.types[0].type.name)}
        />
      </View>

      {detailsSource.stats.map((item, i) => (
        <View key={i} style={styles.statsContainer}>
          <Text style={styles.statsText}>{`${item.stat.name}: ${
            item.base_stat
          }`}</Text>
          <View style={[styles.bar, {width: item.base_stat}]} />
          <AnimatedBar value={item.base_stat} index={i} />
        </View>
      ))}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  pokeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
  },
  typeTxt: {
    display: 'flex',
    flexDirection: 'row',
  },
  typeImg: {
    width: 50,
    height: 50,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '4%',
    width: '100%',
    backgroundColor: '#b1e0ce',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsText: {
    marginRight: 4,
  },
  bar: {
    height: 8,
    backgroundColor: '#516AAC',
  },
};

export default DetailsView;
