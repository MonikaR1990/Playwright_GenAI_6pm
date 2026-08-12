//Promise is a Javascript Object that represents the eventual result (resolve, reject) of an asynchronous process (delay process)

//Promise has 3 states
//1. Pending (Task/operation still running)
//2. FullFilled (Resolve) (Task/operation completed successfully)
//3. Rejected (Task/operation failed)

let myPromise = new Promise((resolve, reject)=>{
    let success = false

    if(success)
    {
        resolve("Operation Successful")
    }
    else
    {
        reject("Operation Failed")
    }
})

myPromise
    .then(result=>console.log(result))
    .catch(error=>console.log(error))

function login(username, password)
{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(username === "Admin" && password === "Admin@123")
            {
                resolve("Login Successful")
            }
            else
            {
                reject("Login Failed")
            }
        }, 2000);
    })
}

// login("Admin", "Admin@123")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error))
/*
User enters username/password
            ↓
       Login API call
            ↓
         Promise
        /       \
   Success      Failure
      ↓            ↓
 Dashboard      Error message   
 
 */

 function logins(username, password)
{
    if(username === "Admin" && password === "Admin@123")
    {
        console.log("Login Successful")
    }
    else
    {
        console.log("Login Failed")
    }
}

logins("Admin", "Admin@123")


