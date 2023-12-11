const marval_heroes = ["thor", "ironMan" , "spiderman"]
const dc = ["superman" , "flash" , "batman"]

//marval_heroes.push(dc)   // it's formed a single array

// console.log(marval_heroes)
// console.log(marval_heroes[3])
// console.log(marval_heroes[3][1])


/*
const allHeros = marval_heroes.concat(dc)
console.log(allHeros)

//  concat and ...  = sprade are doing same works

const allNewHeros = [...marval_heroes, ...dc]
console.log(allNewHeros)

*/


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// flat is used to sprade array in the depth (infinity) .. we give values of depth also

const real_another_array  = anotherArray.flat(Infinity)
//console.log(real_another_array)



/*


console.log(Array.isArray("Devam"))    ///  for asking 
console.log(Array.from("Devam"))         //  it's formed array [ 'D', 'e', 'v', 'a', 'm' ]
console.log(Array.from({name: "Devam"}))    //  interensting 

*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))    //   [ 100, 200, 300 ]


