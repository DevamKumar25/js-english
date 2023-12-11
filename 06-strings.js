const name = "Devam "
const repoCount = 50

console.log(`name is ${name}`)


// this synatx is outdated
//  console.log(name + repoCount + " Value")


//  in modern days we use  backtiks

console.log(`Hello my name is ${name}  and my repoCount is ${repoCount}`);

//  another way to declared a string
const gameName = new String('Devam-Hsc')      //  new define a object of javascript

console.log(gameName[0])
console.log(gameName.__proto__);   // we can access these value in the console log in webbrowser

//  if we check this in console webbrowser then we get output in the key value form
// 0-D
// 1-e
// 2-v
// 3-a
// 4-m   so on

console.log(gameName.length)
console.log(gameName.toUpperCase())      // all the function on console store in webbrowser
console.log(gameName.charAt(2))          // identify which position has which character
console.log(gameName.indexOf('e'))     // 'e'  is in which position


const newString = gameName.substring(0,4)    // start no, end no    substring doesnot contain negative values
//  whenever we give negative it's started from 0
console.log(newString)

const anotherString = gameName.slice(0,4)      //  it's contain negative value also to print in the reverse order
console.log(anotherString)



// trim
// it's is used to remove the starting space and ending space 
//  uses are when user want to write extra character in the emailBox it's remove all the extra charcater

const newString1 = "     Devam     "
console.log(newString1)
console.log(newString1.trim());





// replace


const url = "https://Devam.com/devam%20Kumar"

console.log(url.replace('%20','-'))  //  which part replace,,  include on those part

console.log(url.includes('Devam'))   // true



console.log(gameName.split('-'))    // Devam-Hsc












