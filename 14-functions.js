

function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("A");
    console.log("M");
}

// sayMyName = refrence  , if we add - ()  , it formed execuation

//sayMyName()





// function addTwoNumber(num1, num2){      //  num1, num2 =  parameters ,,  when we defined function
//    console.log(num1 + num2)

// }
//addTwoNumber(3,"5")       // when we call the values in function , values are called arguments
//addTwoNumber(3,5)




/*

function addTwoNumber(num1, num2){      
    let result = num1 + num2
    return result                     // after return variables the function doesn't works
    //console.log("Devam")
 
 }
 const result = addTwoNumber(3, null)
console.log("Result : ", result)

*/

function loginUserMessage(username = "Devam") {    //  by default print "Devam"
    if(!username){                                          //  username === undefined
        console.log("Please enter a user name");
        return

    }
    return `${username} just logged in`
} 

// console.log(loginUserMessage("Devam"))
console.log(loginUserMessage())            //  undefined just logged in
console.log(loginUserMessage("de"))    //  if we give the value it has override 