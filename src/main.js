//
import pokemon from './data/pokemon/pokemon.js';

// funcion traer nombre

let botonacceder = document.getElementById('acceder');
botonacceder.addEventListener('click', obtenerNombre);


function obtenerNombre  (name) {
   let nameresult = document.getElementById('namecontent').value;
    if (nameresult.length > 0){
       document.getElementById('paginaContenedorNombre').innerText=('Hola ' + nameresult + ' Bienvenid@');
    }
}

console.log(pokemon);
