
// foreach loop doesn't return anythings

/*const coding = ["js" , "ruby" , "java" , "python" , "c++"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item
})

console.log(values)*/ 





// filter returns the values
// in filter we have callback function ,then condition (true) = values return 

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 5)
// const newNums = myNums.filter( (num) => {    // if we open the scope we must use return .
//     return num > 5
// })



// same things using forEach 

//let newNums = []
// myNums.forEach(  (num) => {
//     if (num>5) {
//         newNums.push(num)

// }
// })

//console.log(newNums)






//*************************** Map  */

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const neWNum = myNums.map( (num) => {return num + 10})

// chaining method to used for more access method

const newNums = myNums
.map( (num) => num * 10 )   // multiply by 10
. map( (num) => num + 1)    // add by 1
.filter( (num) => num >= 40)     // callback function ,then condition (true/false) = values return

console.log(newNums)

