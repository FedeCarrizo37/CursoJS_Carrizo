async function example1( ){ return 'Hello'; }
async function example2( ){ return Promise.resolve( 'World' ); }

async function errorExample1( /* arguments */ ){
  return Promise.reject( 'Rejected1!' );
}
async function errorExample2( /* arguments */ ){
  throw 'Rejected2!';
}
async function errorExample3( /* arguments */ ){
  await Promise.reject( 'Rejected3!' );
}
