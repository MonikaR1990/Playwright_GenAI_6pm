// //Promise is a Javascript Object that represents the eventual result (resolve, reject) of an asynchronous process (delay process)

// //Promise has 3 states
// //1. Pending (Task/operation still running)
// //2. FullFilled (Resolve) (Task/operation completed successfully)
// //3. Rejected (Task/operation failed)

// let myPromise = new Promise((resolve, reject)=>{
//     let success = false

//     if(success)
//     {
//         resolve("Operation Successful")
//     }
//     else
//     {
//         reject("Operation Failed")
//     }
// })

// // myPromise
// //     .then(result=>console.log(result))
// //     .catch(error=>console.log(error))

// function login(username, password)
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             if(username === "Admin" && password === "Admin@123")
//             {
//                 resolve("Login Successful")
//             }
//             else
//             {
//                 reject("Login Failed")
//             }
//         }, 2000);
//     })
// }

// // login("Admin", "Admin@123")
// //     .then(result=>console.log(result))
// //     .catch(error=>console.log(error))
// /*
// User enters username/password
//             ↓
//        Login API call
//             ↓
//          Promise
//         /       \
//    Success      Failure
//       ↓            ↓
//  Dashboard      Error message   
 
//  */

//  function logins(username, password)
// {
//     if(username === "Admin" && password === "Admin@123")
//     {
//         console.log("Login Successful")
//     }
//     else
//     {
//         console.log("Login Failed")
//     }
// }

// // logins("Admin", "Admin@123")

// function verifyOTP(OTP)
// {
//     return new Promise((resolve, reject)=>{
//         console.log("Verifying OTP")

//         setTimeout(()=>{
//             if(OTP==="123456")
//             {
//                 resolve("OTP Verified Successfully")
//             }
//             else
//             {
//                 reject("Invalid OTP")
//             }
//         }, 3000)
//     })
// }

// // verifyOTP(123456)
// //     .then(result=>console.log(result))
// //     .catch(error=>console.log(error))

// /*
// User Enter OTP
// |
// OTP Sents to Server
// |
// Server verifies
// |
// Success/Failure
// */

function interviewProcess(candidateScore)
{
    return new Promise((resolve, reject)=>{
        
        console.log("HR: You Interview is Completed")

        console.log("HR: We will update your status within 3 days")

        setTimeout(() => {
            
            if(candidateScore>=80)
            {
                resolve({
                    status: "Selected",
                    company: "TCS",
                    role: "Software Test Engineer",
                    salary: "10 LPA"
                })
            }
            else
            {
                reject("Sorry !! Another Candidate matched our requirements better")
            }

        }, 3000);
    })
}

interviewProcess(85)
    .then(result => {
        console.log("Congratulations!!")
        console.log("Comapany Name: ", result.company)
        console.log("Role: ", result.role)
        console.log("Salary: ", result.salary)
    })
    .catch(error => console.log(error))
