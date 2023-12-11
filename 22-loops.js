// iterators

//  for-loops
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// }




// printing for 1 to 10 tables

/*for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop values : ${i}`)
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop values : ${j}  and inner loop ${i}`)
        
        console.log(i + '*' + j + ' = ' + i*j)
    }
    
}*/



/*let myArr = ["flash" , "batman" , "superman"]
console.log(myArr.length)
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element)
    
} */






//  break,  continues

// break
// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log(`Detected 5`)
//         break                       //  loop goes out of scopes
//     }
//     console.log(`values of i is ${i}`)
    
// }




// continue

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(`Detected 5`)
        continue                       //  one times skip
    }
    console.log(`values of i is ${i}`)
    
}