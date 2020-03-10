import POKEMON from './data/pokemon/pokemon.js';
 console.log(POKEMON.pokemon);

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
 const data = POKEMON.pokemon;
 const template = (list) => {
     let templateListPokemon= '';
   list.forEach((data) => {
       const card = `
       <div class = 'card-link'>
         <article class='container-cards id='container-cards'>
         <div class="cuadro-dentro">
                   <div class='contimg'><img class='img' src='${data.img}' /></div>
                   <div class='article-details'>
                   <h3 class='num' > ${data.num} </h3>
                   <h4 class='nombre'>${data.name}</h4>
                   <h6 class='tipo'>Tipo: ${data.type}</h6>
                 </div>
         </article>
        </div>
       `;
    templateListPokemon += card;
   });
   document.getElementById('container-cards-pokemon').innerHTML = templateListPokemon
 };
 template(data);


 
