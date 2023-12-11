//  objects declared in two ways 1) literals  2) constructors

// singleton =it's fored using constructor not a literals



//Object.create    = it's constructor


// object literals

const mySym = Symbol("Key1")



const JsUser = {
    name: "Devam",             // we define keys, values ,  names is by default string
    age: 20,
    "full name": "Devam Kumar",
    location : "Bihar",
    mySym : "myKeys1",    // it's acts like a string.
    [mySym] : "myKeys1",    // it's symbol
    email : "Devamkumar758@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser["mySym"])      ///  access the symbol datatypes

JsUser.email = "dev35@gmail.com"   // change the values

//Object.freeze(JsUser)
JsUser.email = "DevamChatgpt.com"   //  lock this one so that no one can change further
console.log(JsUser)



JsUser.greeting = function(){
    console.log('Hello Js User')
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)     // this -  referenced the same objects
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())
