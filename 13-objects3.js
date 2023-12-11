
//    destructure of the objects


const course = {
    coursename : "Js in hindi",
    price: "999",
    courseIns: "devam"

}

// method 1) to access the objects

//course.courseIns

// method 2) to access the objects

const {courseIns} = course       //  {curlybraces }  is used for de structuring 
console.log(courseIns)

// method 3) to access the objects
const {courseIns : instructor} = course
console.log(instructor)




// *********************** API's of JSON   Format *******************************

// JSon is also an objects , but both keys and values are string , but not form boolean, numbers

// {
//     "name" : "Devam",
//     "Coursename" : "Js in ",
//     "Price" : "free"
// }



//  API's  take in arrays format also

[
    {},
    {},
    {}
]