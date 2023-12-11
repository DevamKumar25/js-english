//  Immediately Invoked Function Expressions(IIFE)

//  1) Immediately execute
// 2) there is a pollution in global scope = if we write in global scope

//  if we write in global scope then we want no  pollution then we use IIFE

// function chai(){
//     console.log('DB CONNECTED')
// }
// chai()

//  jo global scope me pollution hote a variables ke karan woske remove karne ke liye IIFE ka use karte h

// IIFE USED  for immediately execute call

(function chai(){

    // named IIFE
    console.log('DB CONNECTED')
})();          //  for second code run , and first code exit we use ; to run second code

// 1.() - used for write a definition of function , 2.() - used for execuation call

//  if write two IIFE together we must use ; after first IIFE

// IIFE using arrow space

//  unnmaed IIFE with Passing the parametersz
( (name) => {
    console.log(`DB CONNECTED  TWO ${name}`)
})('Devam')