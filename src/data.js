// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';

// esta es una función de ejemplo
const sortData = (data, sortBy, sortOrder) => {
  let arrOrder = [];
  /*Ordenar Alfabeticamente*/
   if (sortBy === 'name'){
      if (sortOrder === 'A-Z'){
        arrOrder = data.sort(function(abc,bcd){
           if (abc.name > bcd.name) return 1;
           if (abc.name === bcd.name) return 0;
           return -1;
        });
      }else{
        arrOrder = data.sort(function (abc, bcd){
          if (bcd.name > abc.name) return 1;
          if (bcd.name === abc.name) return 0;
          return -1;
        });
      }
      
    /*Ordenar por número*/
    } else if (sortBy === 'number'){
      if (sortOrder === 'asc'){
        arrOrder = data.sort(function (abc, bcd){
          if(abc.num > bcd.num) return 1;
          if(abc.num === bcd.num) return 0;
          return -1;
        });
      }else {
        arrOrder = data.sort(function(abc, bcd){
          if (bcd.num > abc.num) return 1;
          if (bcd.num === abc.num) return 0;
          return -1;
        });
      }
    }
   return arrOrder;
   };


export default sortData

//funcion filtrar

const filterData = (data, condition) => {
  let arrType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === condition) {
        arrType.push(data[i]);
      }
    }
  }
  return arrType;
};
