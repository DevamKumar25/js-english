// truty values = we assume there is some values in variables

// const userEmail = "Devam@gmail.com"


// if (userEmail) {
//     console.log("Got user email")
// }
// else{
//     console.log("Don't have user email")
// }


//  falsy values

//  false, 0 , -0 , BigInt 0n, "emptyString" , null, undefined , NaN(not a number)  all are falsy values

// except this all are truthy values

// truthy values

// "0" , 'false' , " " , [] ,{} ,function() {} = empty function, 



const userEmail = []

if(userEmail.length === 0){
    //console.log("Arrays is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("objects is empty")
}


/*

// Nullish Coalescing Operator (??) : null undefined
// this operator is only for null,undefined values.
// it's used when there is some error it can handled by another values


let val1
//val1 = 5 ?? 10   // 5
//val1 = null ?? 10  // 10
//val1 = undefined ?? 15

val1 = null ?? 10 ?? 20    // 10

console.log(val1)

*/


//  Terniary operator

// condition ? true : false

const iceTea = 100
iceTea >= 80 ? console.log("Less than 80") : console.log("more than 80")









/*

// from the browser ends

false == 0
true
false == ''
true
0 == ''
true

*/