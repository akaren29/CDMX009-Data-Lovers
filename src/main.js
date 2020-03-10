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


 //Ordenar
 const selectOrder = document.getElementById("order");
 selectOrder.addEventListener("change", showOrder);
 function showOrder() {
     let selectedOrder = selectOrder.options[selectOrder.selectedIndex].value;
     let filterResult = window.order(window.data, selectedOrder);
     document.getElementById('container-cards-pokemon').innerHTML = "";
     for (let i = 0; i < filterResult.length; i++) {
         let pokeCards = document.createElement('div');
         pokeCards.className = 'card-link';
         let pokeName = document.createElement('h4');
         pokeName.textContent = filterResult[i].name;
         let image = document.createElement('img}');
         image.src = filterResult[i].img;
         let pokeNumber = document.createElement('h3');
         pokeNumber.textContent = filterResult[i].num;
         let pokeType = document.createElement('h6');
         pokeType.textContent = filterResult[i].type[0];
         pokeCards.appendChild(image);
         pokeCards.appendChild(pokeName);
         pokeCards.appendChild(pokeNumber);
         pokeCards.appendChild(pokeType);
         //Mostrar tarjeta en HTLM -> section
         document.getElementById('container-cards-pokemon').appendChild(pokeCards).innerHTML;
     }
  }

search.addEventListener("keyup", filter);
