//  two types of datatypes in js 1) premitive 2) non-primitive  (refernce types)

//  dataypes divided on the basis of how to store the data and how to access the data

//  premitive (call by values)
//  7 types  : 1) string  2) Number 3) Boolean  4) Null  5)undefined  6)Symbol  7) BidInt (scientific values which is very big)
// symbol is used for make a values uniques



// js is static types or dynamic types

/*


const score = 100   //number
const scoreValues = 100.3   //float
const isLoggedIn = false  // boolean types
const outSideTemp = null
let userEmail;     // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)   // false


const bigNumber = 2348751287512n    //  it's formed BigInt


*/




//  Non-Premitive(reference types)
//  Arrays , objects , Functions



const heros = ["shaktiman", "naggraj", "doga"];    // arrays

//  objects   === dtatypes of objects is anythings like boolean,numbers,string, BigInt, symbol
let myObj = {
    name: "Devam",
    age: 20,

}



//  function
//  treat as varibles

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction)    // function return datatypes