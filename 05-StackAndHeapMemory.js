
/*

//  stack 
// it's used in primitive datatypes
// it;s values will be change throughout the program

let myMain = "DevamKumar"

let anotherMain = myMain
console.log(myMain)    
anotherMain = "Dm"
console.log(anotherMain)


*/











//   heap      //  refrence vales =  get original values whenever we change
//  it's used in non-primitive datatypes

//objects
let userOne = {
    email : "devamKumar@gmail.com",
    upi : "mubu@"
}

let userTwo = userOne

userTwo.email = "Dev@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
