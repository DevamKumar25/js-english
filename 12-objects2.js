

const tinderUser = new Object()   // singleton  objects
// const tinderUser = {}   // non-singleton   objects


 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false

//console.log(tinderUser)           //  empty objects


const regularUser = {
    email : "Sum@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Devam ",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// console.log(regularUser.email)
// console.log(regularUser.fullname.userfullname)



const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a", 4: "b"}
const obj4 = {5 : "a", 6: "b"}

//const obj3 = {obj1, obj2}   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign(obj1 , obj2)   //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = Object.assign({}, obj1 , obj2, obj4)      //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//  sprade function 

const obj3 = {...obj1, ...obj2,...obj4}       //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//console.log(obj3)



//   when inputs comes from database

const users = [
    {
        id : 1,
        email : "de@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))   //  [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    // true    variables exist or not
