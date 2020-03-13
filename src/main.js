import data from './data/pokemon/pokemon.js';
import {sortData,filterData} from './data.js';
console.log(data.pokemon);

// funcion traer nombre
let obtenerNombre = name => {
  let nameresult = document.getElementById('namecontent').value;
   if (nameresult.length > 0){
      document.getElementById('paginaContenedorNombre').innerText=('Hola ' + nameresult + ' Bienvenid@');
   }
}
let botonacceder = document.getElementById('acceder');
botonacceder.addEventListener('click', obtenerNombre);



//Funcion traer pokemones a pagina contenedor
const pokemones = data.pokemon;
const template = (list) => {
    let templateListPokemon= '';
  list.forEach((pokemones) => {
      const card = `
      <div class = 'card-link'>
        <article class='container-cards id='container-cards'>
        <div class="cuadro-dentro">
                  <div class='contimg'><img class='img' src='${pokemones.img}' /></div>
                  <div class='article-details'>
                  <h3 class='num' > ${pokemones.num} </h3>
                  <h4 class='nombre'>${pokemones.name}</h4>
                  <h6 class='tipo'>Tipo: ${pokemones.type}</h6>
                </div>
        </article>
       </div>
      `;
   templateListPokemon += card;
  });
  document.getElementById('container-cards-pokemon').innerHTML = templateListPokemon
};
template(pokemones);


 //Función para ordenar a los pokemones
  document.getElementById('orderPokemon').addEventListener( 'click', (event) =>{
   const selectedIndex = event.currentTarget.selectedIndex;
   if (selectedIndex === 1){
     template(sortData(pokemones, 'name', 'A-Z'));
   }else if (selectedIndex === 2){
     template(sortData(pokemones, 'name', 'Z-A'));
   }else if (selectedIndex === 3){
     template(sortData(pokemones, 'number', 'asc'));
   }else if(selectedIndex === 4){
     template(sortData(pokemones, 'number', 'des'));
   }
 });


 //filtrado por tipo
 document.getElementById('typePokemones').addEventListener('change', (event) => {
   const selectedIndex = event.currentTarget.selectedIndex;
   if (selectedIndex === 1) {
     template(filterData(pokemones, 'Water'));
   } else if (selectedIndex === 2) {
     template(filterData(pokemones, 'Bug'));
   } else if (selectedIndex === 3) {
     template(filterData(pokemones, 'Dragon'));
     console.log((filterData(pokemones, 'Dragon')))
   } else if (selectedIndex === 4) {
     template(filterData(pokemones, 'Electric'));
   } else if (selectedIndex === 5) {
     template(filterData(pokemones, 'Ghost'));
   } else if (selectedIndex === 6) {
     template(filterData(pokemones, 'Fire'));
   } else if (selectedIndex === 7) {
     template(filterData(pokemones, 'Ice'));
   } else if (selectedIndex === 8) {
     template(filterData(pokemones, 'Fighting'));
   } else if (selectedIndex === 9) {
     template(filterData(pokemones, 'Normal'));
   } else if (selectedIndex === 10) {
     template(filterData(pokemones, 'Grass'));
   } else if (selectedIndex === 11) {
     template(filterData(pokemones, 'Psychic'));
   } else if (selectedIndex === 12) {
     template(filterData(pokemones, 'Rock'));
   } else if (selectedIndex === 13) {
     template(filterData(pokemones, 'Ground'));
   } else if (selectedIndex === 14) {
     template(filterData(pokemones, 'Poison'));
   } else if (selectedIndex === 15) {
     template(filterData(pokemones , 'Flying'));
   }
 });


 // se muestra la segunda y desaparece la primera seccion
   document.getElementById("acceder").addEventListener('click', () => {
   document.getElementById("segunda-seccion").style.display = 'block';
   document.getElementById("header-inicio").style.display = 'none';
 });

 // se muestra la segunda y desaparece la primera seccion
   document.getElementById("verOrder").addEventListener('click', () => {
   document.getElementById("segunda-seccion").style.display = 'block';
   document.getElementById("header-inicio").style.display = 'none';
 });

 // se muestra la segunda y desaparece la primera seccion
   document.getElementById("verFiltro").addEventListener('click', () => {
   document.getElementById("segunda-seccion").style.display = 'block';
   document.getElementById("header-inicio").style.display = 'none';
 });
