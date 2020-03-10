// import data from './data/injuries/injuries.js';
// import data from './data/lol/lol.js';
// import data from './data/patient/patient.js';
import POKEMON from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/steam/steam.js';
// import data from './data/steam/worldbank.js';

// esta es una función de ejemplo



const data = window.POKEMON.pokemon;
window.data = data;

const order = (data, selectedOrder) => {
    let filterOrder = "";
    if (selectedOrder === "1-151") {
        filterOrder = data.sort((a, b) => {
            return a.id - b.id
        })} else if (selectedOrder === "151-1") {
            filterOrder = data.sort((a, b) => {
            return b.id - a.id
        })} else if (selectedOrder === "A-Z") {
            filterOrder = data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })} else if (selectedOrder === "Z-A") {
            filterOrder = data.sort((a, b) => {
            return b.name.localeCompare(a.name);
        })}
        return filterOrder;
}
window.order = order;
