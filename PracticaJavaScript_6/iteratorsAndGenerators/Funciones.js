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

function *gen() {
  let i = 1;
  while (true){
    yield i;
    i = i * 2;
  }
}
