// declared in the array

//  array is an object . we can store multiple item in single variables
// it's can be resizable = we can store element after decaled it
// we can access through index
// 0 based indices

//   in Js if we make array it form a shallow copy
 // shallow copy is a copy whose properties share the same references points


 //  Deep copy = properties don't share the same references


const myArr = [0,1,2,3,4,5]
// const myHeros = ["shaktiman" , "naagraj"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0])




//  Arrays Methods

// 1
// [
//   0, 1, 2, 3,
//   4, 5, 6
// ]

// myArr.push(6)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)


// myArr.unshift(9)  
//      //  it's shift the values in the first but this not good ideas to push in the front it's time consuming

// myArr.shift()     //  remove the first array

//console.log(myArr.includes(3))    //  it's present or not  == true

//console.log(myArr.indexOf(8))       //  it's gives the index on values ,, if values are not present it gives -1



const newArr = myArr.join()
console.log(myArr)       //  [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr)         //0,1,2,3,4,5
console.log(typeof newArr)       //  join change the datatypes if array  = string



//  slice  , splice

// in slice it's does'nt manupulate the original arrays


console.log("A" , myArr)   // A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3)  // start,  don't include last index
console.log(myn1)                       //  [ 1, 2 ]
console.log("B" , myArr)



// in splice it's manupulate the original arrays ,,  


const myn2 = myArr.splice(1,3)
console.log("C" , myArr)     // C [ 0, 4, 5 ]
console.log(myn2)              //  [ 1, 2, 3 ]