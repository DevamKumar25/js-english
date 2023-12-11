/*

const score = 400
console.log(score)


const balance = new Number(100)
console.log(balance)


console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));           //  fixed the double values

const otherNumber = 23.45373
console.log(otherNumber.toPrecision(3))     // it's gives the round of values


const hundreds = 10000000000
console.log(hundreds.toLocaleString())          //lakhs ,thousands , hundred, tens, ones
console.log(hundreds.toLocaleString('en-IN'))    // according to the indian standred



*/





//*********************************  Maths **************************************


console.log(Math)
console.log(Math.abs(-4))          //  convert -ve values into positive values not vice-versa

console.log(Math.round(4.6))           // it;s gives round of values

// ans if we want to print the upper and lower values we use 

console.log(Math.ceil(4.6))        //  it's gives upper, top values
console.log(Math.floor(4.6))        //  it's gives the lower values


console.log(Math.sqrt(25))        //  it's gives square root values 25 = 5

console.log(Math.min(-4,5,3,2,5,6))    // it's gives the minimum values

console.log(Math.max(-4,5,3,2,5,6))       // it's gives the maximum values





//  random function


console.log(Math.random())           //   in random always give the values between 0 and 1

console.log(Math.random()*10 + 1) 

console.log((Math.random()*10) + 1)         //  shift the values in left sides

console.log(Math.floor(Math.random()*10) + 1)



// suppose we define min and max 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//  (max - min + 1)   values comes under min to max and avoid zero case
//  min will be added due to avoid min values and get above from the min values
