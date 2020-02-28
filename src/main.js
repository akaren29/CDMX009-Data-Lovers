import { example } from './data.js';

console.log(example);

let botonacceder = document.getElementById('acceder');
botonacceder.addEventListener('click', obtenerNombre);


function obtenerNombre  (name) {
   let nameresult = document.getElementById('namecontent').value;
    if (nameresult.length > 0){
       document.getElementById('paginaContenedorNombre').innerText=('Hola ' + nameresult + ' Bienvenid@');
    }
}
