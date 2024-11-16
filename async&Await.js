


function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      // if we use resolve , it comes under the "try" part
      // when we use "reject" it comes under the catch parts

      resolve({
        name: "chaicode",
        url: "https://www.google.com/search?q=cpp+compiler&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQsxODI2NTMwajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8",
      });
    }, 3000);
  });
}

//  async = this data might some time
// await always with with the function when async is in function 

async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");

    console.log("User data: ", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();
