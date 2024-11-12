
// asynchronous  = it's not following the sequence of the code .
// having a pause in some part of coding in any language but Js haven't any thing like this , so we inject exstensively.

// there are many thing which take some time such as  
// 1) Network calls  (server is in other country, db in another)
// 2) write/ read from file 
// 3) time function also take time (setTimeout , setTimeINterval) 
// UserInput 
// 4) DOM manipulation (rendering UI)



//  event Loop (How it's work) = code(we write) --->  Call stack(some basics function will execute with the help of EVENT LOOP )  
// if event loop don't have capability to run some function like (setTimeout , setTimeINterval)  they simply put in js evvironment linke (NODEjs, Bun)  and then goes in any of yhe two QUEUE(VIP,NORMAL) and then event loop execute this function 
// after removing from the stack of normal function ,,  VIP function goes from QUEUE to STACK and then event loop run the function 


/// and how asyncronous function run // behind the seen 

function sayHello() {
  console.log("I would like to say Hello");
}

setTimeout(() => {
  sayHello();
}, 4000);

console.log("chaicode");

// synchronoius code  = every code is in synchronised manner .. run line by line 
for (let index = 0; index < 10; index++) {
  console.log(index);
}
