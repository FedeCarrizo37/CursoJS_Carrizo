function foo( x ) { return 2 * x; }
function bar( y ) { return foo( y + 5 ) - 10; }

// Realizar una función denominada fn_MostrarArray (cb,tiempo) que se guardará en el
// archivo funciones.js , dicha función recibe 2 parámetros, cb es una función arrow para call
// back y tiempo corresponde al valor a ser utilizado en una sentencia setTimeout. Ahora
// bien para realizar fn_MostrarArray (cb,tiempo) debe tomarse como referencia a
// higherOrder(data, cb)

function higherOrder(cb,tiempo) {
  if ( !cb || !( typeof cb === 'function' ) ) {
    throw new Error( `Invalid callback. Please provide a function.` );
  }
  console.log( `Data: ` + data );
  setTimeout( cb, tiempo );
}
