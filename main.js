// Síncrono vs Asíncrono

console.log("Inicio");

let suma = 1 + 1
console.log(suma);

console.log("Fin");

// Promesas
const listaAlumnos = ["Yenifer", "Bella", "Dai", "Felipe"]

function pedirAsistencia(alumno){
     return new Promise( ( resolve, reject )=>{
          if(listaAlumnos.includes(alumno)){
               resolve("Está Presente el alumno")
          }else{
               reject("Algo falló no tengo datos")
          }
     } )
}

// promesa
pedirAsistencia("Dai") // Esto me devuelve una promesa, la promesa es un objeto que tiene métodos then-catch-finally 
     .then( respuestaResolve => console.log(respuestaResolve) ) // then () Lo uso para manejar la respuesta exitosa de esa promesa
     .catch( respuestaReject => console.log(respuestaReject) ) // catch() Siempre un catch para manejo de errores, pero siempre tiene que haber un catch
     .finally( () => console.log("El proceso se terminó") ) // finally() Se cumple sin importar si la promesa se resolvió o no

console.log(pedirAsistencia("Fede"));

// Fecth - Es una API que nos permite hacer las peticiones HTTP
// fecth() es un método y me devuelve una promesa
fetch('https://apisimpsons.fly.dev/api/personajes?limit=20') // console.log( fetch('url') )
// Me llegó una respuesta en forma de objeto que tiene un método que vamos a usar
     .then( respuesta => respuesta.json() ) // usamos el método json() y éste me devuelve otra promesa
     .then( respuesta => {
          const arrayPersonajes = respuesta.docs
          console.log(arrayPersonajes);
          // Ejecución de la función dentro del then porque necesito el array que cree y que solo vive en el bloque de la fn del then
          console.log( mostrarNombresPersonajes(arrayPersonajes) );
     } ) // Uso este then para manejar la promesa exitosa del método .json()
     .catch( error => console.log(error) ) 

// Declaración fn, fuera del then()
function mostrarNombresPersonajes(array){
     return array.map( personaje => personaje.Nombre )
}





// .json() // método
// .json // Tipo de dato
// JSON // Objeto