function createIterator( array ){
  let currentIndex = 0;
  return {
    next(){
      return currentIndex < array.length ?
      { value: array[ currentIndex++ ].toString(), done: false} :
      { done: true };
    }
  };
}

function *gene() {
  let i = 1;
  while (true){
    yield i;
    i = i * 2;
  }
}

function* fibonacci () {
  let n2 = 0;
  let n1 = 1;

  while ( true ) {
    let input = yield n2;
    if ( input ) {
      n1 = 1;
      n2 = 0;
    } else {
      let next = n1 + n2;
      [ n1, n2 ] = [ next, n1 ];
    }
  }
}
