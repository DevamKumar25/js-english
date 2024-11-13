// promises = it's an utility provided by javascript
// it's callback which takes two parameter 1) resolve 2) reject



//  how to create the promise 
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

// promise is in one of thses states:-
//1) pending = inital state , neither fulfilled nor rejected
// 2) fulfilled = meaning that the operation was completed success
// 3) rejected = meaning that operation failed 


// how to consume the promise 

fetchData()
  .then((data) => { // then = for success
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) =>  // catch = for failure
     console.error(error));
