//  scope is start with three keywords  = let, const, var
//  scope = {}, if it comes with if-else, fuction , it's names as function of the scope



//  outside block  = Global Scope
var c = 300
let  a = 400




//  inside block  = called BLOCk Scope
if(true) {
    let a =10
    const b = 20
   // var c = 30
   // c = 30
   //console.log("INNER : ",a)

}


//console.log(a)
//console.log(b)
//console.log(c)                // 30  var is not used because of this scope,,  let is used everywhere




//************************* Nested function ************************************************* */

function one(){
    const username = "Devam"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)

    two()
}

//one()


////     same consotion using if-else

if(true) {
    const username = "Devam"
    if(username === "Devam"){
        const website = " youtube"
        console.log(username + website)
    }

   // console.log(website)
}

//console.log(username)      // don't access because of there is no scope of username



// **************************  interesting *************************

console.log(addone(5))
function addone(num) {
    return num + 1
}
addone(5)



// addTwo(5)         // we can not access function before declaration,,,   
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))           //  it's works ,, becoz call after decalred


