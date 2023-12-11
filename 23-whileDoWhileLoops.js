

let index = 0

while (index<=10) {
    //console.log(`values of index is ${index}`)
    index+=2
}





let myArr = ['flash' , 'batman' , 'superman']

let arr = 0
while (arr<myArr.length) {
    //console.log(`values is ${myArr[arr]}`)
    arr+=1
}







// do-while loop

// it's works first then check the condition

let score = 11
do{
    //console.log(`score is ${score}`)
    score++

}
while(score<=10)






//  for of loop

// ["", "" ,""]
// [{} , {}, {}]

const array = [1,2,3,4,5]

for (const num of array) {
    //console.log(num)
    
}

const greeting =  "Hello objects"
for (const greet of greeting) {
    //console.log(`each char is ${greet}`)
}











//*************************Map **************** */

//  it's key-values pairs
// maps is also known for unique values

const map = new Map()
map.set('In' , "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('Fr', " FRANCE")
map.set('In' , "INDIA")

//console.log(map)

// for of
for (const key of map) {
    //console.log(key)
}

// for in = not used for the map
for (const key in map) {
    //console.log(key)
}



//  de-structure of arrays
for (const [key,values] of map) {
    //console.log(key, ':-' , values)
}








//******************    for In loop */
//it's is mostly used for objects and other also

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

for (const key in myObject) {
    //console.log(myObject[key])
    //console.log(`${key} :- ${myObject[key]} ` )
}



const arrays = [1,2,3,4,5]
for (const key in arrays) {
    //console.log(arrays[key])
}










//*******************************  FOR each loop */


const coding = ["js" , "ruby" , "java" , "python" , "c++"]

coding.forEach( function (item) {       // it's call back function so there is no name
    //console.log(item)

} )


// arrow function

coding.forEach(  (item) => {
   // console.log(item)
})





function printMe(item){
    //console.log(item)
}
coding.forEach(printMe)




coding.forEach( (item, index, ar)=> {
    //console.log(item, index,ar)
})





//=============== inside array, inside objects, find element

const myCoding = [
    {
        language: "Javascript",
        languageFileNme : "js"
    },

    {
        language: "c++",
        languageFileNme : "c++"
    },

    {
        language: "Python",
        languageFileNme : "py"
    },

    {
        language: "Java",
        languageFileNme : "java"
    },
]

myCoding.forEach(  (item) => {
    
    console.log(item.languageFileNme);
    console.log(item.language);

})