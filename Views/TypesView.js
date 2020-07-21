import grass from '../images/Grass.png';
import fire from '../images/Fire.png';
import rock from '../images/Rock.png';
import water from '../images/Water.png';
import bug from '../images/Bug.png';
import dark from '../images/Dark.png';
import dragon from '../images/Dragon.png';
import electric from '../images/Electric.png';
import fairy from '../images/Fairy.png';
import fighting from '../images/Fighting.png';
import flying from '../images/Flying.png';
import ghost from '../images/Ghost.png';
import ground from '../images/Ground.png';
import ice from '../images/Ice.png';
import normal from '../images/Normal.png';
import poison from '../images/Poison.png';
import psyhic from '../images/Psyhic.png';
import steel from '../images/Steel.png';

// const TypesView = pokeType => {
//   switch (pokeType) {
//     case 'grass':
//       return grass;
//     case 'fire':
//       return fire;
//     case 'rock':
//       return rock;
//     case 'water':
//       return water;
//     case 'flying':
//       return flying;
//     case 'bug':
//       return bug;
//     case 'dark':
//       return dark;
//     case 'dragon':
//       return dragon;
//     case 'electric':
//       return electric;
//     case 'fairy':
//       return fairy;
//     case 'fighting':
//       return fighting;
//     case 'ghost':
//       return ghost;
//     case 'ground':
//       return ground;
//     case 'ice':
//       return ice;
//     case 'natural':
//       return natural;
//     case 'poison':
//       return poison;
//     case 'psyhic':
//       return psyhic;
//     case 'steel':
//       return steel;
//   }
// };

// export default TypesView;

const type = pokeType => {
  if (pokeType === 'grass') {
    return grass;
  }
  if (pokeType === 'fire') {
    return fire;
  }
  if (pokeType === 'rock') {
    return rock;
  }
  if (pokeType === 'water') {
    return water;
  }
  if (pokeType === 'flying') {
    return flying;
  }
  if (pokeType === 'bug') {
    return bug;
  }
  if (pokeType === 'dark') {
    return dark;
  }
  if (pokeType === 'dragon') {
    return dragon;
  }
  if (pokeType === 'electric') {
    return electric;
  }
  if (pokeType === 'fairy') {
    return fairy;
  }
  if (pokeType === 'fighting') {
    return fighting;
  }
  if (pokeType === 'ghost') {
    return ghost;
  }
  if (pokeType === 'ice') {
    return ice;
  }
  if (pokeType === 'normal') {
    return normal;
  }
  if (pokeType === 'poison') {
    return poison;
  }
  if (pokeType === 'psyhic') {
    return psyhic;
  }
  if (pokeType === 'ground') {
    return ground;
  }
  if (pokeType === 'steel') {
    return steel;
  }
};

export default type;
