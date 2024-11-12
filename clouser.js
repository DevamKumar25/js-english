function outer() {
  let counter = 4; // retains the memeory
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());


//  clouser are the function .
// if we created any function inside it it will never forget 
// it always retain the memeory of the functions 
