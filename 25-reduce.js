const myNums = [1,2,3]


// used in shopping bar to add all the items , without removing previous ones


/*const myTotal = myNums.reduce(function (accumulator, currentValues) {
    console.log(`accumulator: ${accumulator} and currentValues ${currentValues}`)
    return accumulator + currentValues
} , 0)*/


const total = myNums.reduce( (acc, currVal) => acc + currVal, 0)

//console.log(total)



const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 3999
    },
    {
        itemName : "mobile course",
        price : 5999
    },
    {
        itemName : "data course",
        price : 12999
    },
]

const priceToPay  = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay)





