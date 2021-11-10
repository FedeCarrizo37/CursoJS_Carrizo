function foo( x ) { return 2 * x; }
function bar( y ) { return foo( y + 5 ) - 10; }

// Realizar una funci�n denominada fn_MostrarArray (cb,tiempo) que se guardar� en el
// archivo funciones.js , dicha funci�n recibe 2 par�metros, cb es una funci�n arrow para call
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
