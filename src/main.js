import data from './data/pokemon/pokemon.js';
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


//Función para ordenar a los pokemones
  document.getElementById('orderPokemon').addEventListener( 'click', (event) =>{
   const selectedIndex = event.currentTarget.selectedIndex;
   if (selectedIndex === 1){
     template(sorData(pokemones, 'name', 'A-Z'));
   }else if (selectedIndex === 2){
     template(sorData(pokemones, 'name', 'Z-A'));
   }else if (selectedIndex === 3){
     template(sorData(pokemones, 'number', 'asc'));
   }else if(selectedIndex === 4){
     template(sorData(pokemones, 'number', 'des'));
   }
 });


//Funcion traer pokemones a pagina contenedor
 const pokemones = data.pokemon;
 const template = () => {
     let templateListPokemon= '';
   pokemones.forEach((pokemon) => {
       const card = `
       <div class = 'card-link'>
         <article class='container-cards id='container-cards'>
         <div class="cuadro-dentro">
                   <div class='contimg'><img class='img' src='${pokemon.img}' /></div>
                   <div class='article-details'>
                   <h3 class='num' > ${pokemon.num} </h3>
                   <h4 class='nombre'>${pokemon.name}</h4>
                   <h6 class='tipo'>Tipo: ${pokemon.type}</h6>
                 </div>
         </article>
        </div>
       `;
    templateListPokemon += card;
   });
   document.getElementById('container-cards-pokemon').innerHTML = templateListPokemon
 };
 template(pokemones);


//filtrado por tipo
document.getElementById('typePokemones').addEventListener('change', (even) => {
  const selectedIndex = even.currentTarget.selectedIndex;
  if (selectedIndex === 1) {
    template(POKE.filterData(pokemones, 'Water'));
  } else if (selectedIndex === 2) {
    template(POKE.filterData(pokemones, 'Bug'));
  } else if (selectedIndex === 3) {
    template(POKE.filterData(pokemones, 'Dragon'));
  } else if (selectedIndex === 4) {
    template(POKE.filterData(pokemones, 'Electric'));
  } else if (selectedIndex === 5) {
    template(POKE.filterData(pokemones, 'Ghost'));
  } else if (selectedIndex === 6) {
    template(POKE.filterData(pokemones, 'Fire'));
  } else if (selectedIndex === 7) {
    template(POKE.filterData(pokemones, 'Ice'));
  } else if (selectedIndex === 8) {
    template(POKE.filterData(pokemones, 'Fighting'));
  } else if (selectedIndex === 9) {
    template(POKE.filterData(pokemones, 'Normal'));
  } else if (selectedIndex === 10) {
    template(POKE.filterData(pokemones, 'Grass'));
  } else if (selectedIndex === 11) {
    template(POKE.filterData(pokemones, 'Psychic'));
  } else if (selectedIndex === 12) {
    template(POKE.filterData(pokemones, 'Rock'));
  } else if (selectedIndex === 13) {
    template(POKE.filterData(pokemones, 'Ground'));
  } else if (selectedIndex === 14) {
    template(POKE.filterData(pokemones, 'Poison'));
  } else if (selectedIndex === 15) {
    template(POKE.filterData(pokemones , 'Flying'));
  }
})
