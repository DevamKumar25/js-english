//  this function 

const user = {
    username : "Devam",
    price : 999,

    WelcomeMessage : function(){ /// this keywords refer current context
        console.log(`${this.username} , Welcome to website`)
        console.log(this)    //  talk about current values 
    }
    

}

// user.WelcomeMessage()
// user.username = "Sam"    //  we can change the context(value)
// user.WelcomeMessage()

//console.log(this)    //  {}




// function chai() {
//     let username = "Devam"          //  this is used in ibjects only not in the function
//     console.log(this.username)
// }

// chai()


// const chai = function(){
//     let username = "Devam"
//     console.log(this.username)      // undefined
// }







//   ARROW function 

// const chai = () =>{
//     let username = "Devam"
//     console.log(this)      
// }

// chai()


//  basics of arrow function

// explict return  = when we use return keywords

// const addTwo =  (num1, num2) => {
//     return num1+num2
// }




//   implicit return 

// whenever we make {curlyBraces} we must to take return

//const addTwo =  (num1, num2) =>  num1+num2       //  we can't write return keywords because onely one line
// const addTwo = (num1, num2) => (num1 +num2)   

const addTwo = (num1, num2) => ({username : "devam"}) //  when we return object we must wrap in {}

//console.log(addTwo(3,4))



const myArr = [2,4,5,7,8]

