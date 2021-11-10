async function example1( ){ return 'Hello'; }
async function example2( ){ return Promise.resolve( 'World' ); }

async function awaitExample( /* arguments */ ){
  let promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( 'done!'), 100 );
  });
  const result = await promise;
  console.log( result ); // Expected output: done!
}
