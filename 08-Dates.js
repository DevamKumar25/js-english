//  js Date objects represent a single moment in time platform-independent format. Date object encaplsulate
//  an integer number that represent millisecond since the midnights at the beginnings of Jan - 1970

// date is a object in Js
let mydate = new Date()
console.log(mydate)         
console.log(mydate.toString())         // Mon Nov 27 2023 16:01:11 GMT+0530 (India Standard Time)  it's gives exact date time day

console.log(mydate.toDateString())   //  Mon Nov 27 2023
console.log(mydate.toJSON())         //  2023-11-27T10:31:11.028Z
console.log(mydate.toLocaleDateString())    //  27/11/2023
console.log(mydate.toLocaleString())         //  27/11/2023, 4:01:11 pm



console.log(typeof mydate)      //  object

// let myCreatedDate = new Date(2023, 0 , 23)   //  month start at index from 0 in Js
// console.log(myCreatedDate.toDateString())       //   Mon Jan 23 2023


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString())       // 23/1/2023, 5:03:00 am



//let myCreatedDate = new Date("2023-01-14")  //  YY-MM-DD
 let myCreatedDate = new Date("01-14-2023")  //  MM-DD-YY   14/1/2023, 12:00:00 am
// console.log(myCreatedDate.toLocaleString())



// timestamp
// it's uses to decide a pool to whom get faster result , who choose late.  exact time

let myTimeStamp =  Date.now()
// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime())     // it's give a values in millisecond from the date
 
console.log(Date.now()/1000)    // it's gives values in seconds
console.log(Math.floor(Date.now()/1000))  //  it's remove the decimal values in the end

let newDate = new Date()
console.log(newDate)


// when we want to get only month, year, day

console.log(newDate.getDay())  //  1 = monday
console.log(newDate.getMonth()+1)
console.log(newDate.getFullYear())



//`${newDate.getDay()} and the time is ${newDate.getTime}`


newDate.toLocaleString('default', {   //  ctrl+ space to get all the property
    weekday: "long",
    
})

console.log(mydate)