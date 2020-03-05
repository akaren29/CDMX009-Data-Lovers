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
         <article class='blog-card'>
          <img class='post-image' src='${data.img}' />
           <h3 class='post-id' > ${data.num} </h3>
           <div class='article-details'>
            <h4 class='post-title'>${data.name}</h4>
            <h6 class='post-category'>${data.type}</h6>
           </div>
         </article>
        </div>
       `;
    templateListPokemon += card;
   });
   document.getElementById('container-cards').innerHTML = templateListPokemon
 };
 template(data);