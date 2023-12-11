// in E-commerce ..  user put the number in whishlist ,,  we don't knw how many he want to increase the number 
//  so declared the function just to add all the items of the prices


function calculateCartPrice(...num1){           /// ... also called rest and sparade but it's depends
    //  here ...  rest is used because all the number include in bucket ,, arrays
    return num1

}

function calculateCartPrice(val1,val2,...num1){           //  val1, val2 for 2 numbers and rest of them are in bucket
    return num1

}

//console.log(calculateCartPrice(200,400,500,600,700))


const user = {
    username : " Devam",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is${anyObject.username}  and price is ${anyObject.price}`)
}
// handleObject(user)   //call the function

// we pass the object to access the data

handleObject({
    username : "DevamKumar",
    price : 399
}
)

// we pass the arrays to access the data



function returnedSecondValue(getArray){
    return getArray[1]
}

const myNewArr = [200,400,100,600]

// console.log(returnedSecondValue(myNewArr))

console.log(returnedSecondValue([200,300,400,500,600]))