// function login()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("1. Login Successful")
//             resolve()
//         })
//     })
// }

// function searchTrain()
// {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("2. Train Found")
//             resolve()
//         }, 2000);
//     })
// }

// function selectSeat()
// {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log("3. Seat Selected")
//             resolve()
//         }, 2000);
//     })
// }

// function pay()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("4. Payment Successfull")
//             resolve()
//         }, 2000)
//     })
// }

// function getTicket()
// {
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("5. Ticket Downloaded")
//             resolve()
//         }, 2000)
//     })
// }

// //Promise Handle using then() and catch()

// // login()
// //     .then(()=>searchTrain())
// //     .then(()=>selectSeat())
// //     .then(()=>pay())
// //     .then(()=>getTicket())
// //     .then(()=>console.log("5. Train Ticked Booking Completed"))
// //     .catch(error=>console.log(error))

// //Async and Await are used to handle Asychronus Process or Promise (looking like normal)

// async function bookTrainTicket()
// {
//     await login()
//     await searchTrain()
//     await selectSeat()
//     await pay()
//     await getTicket()

//     console.log("5. Train Ticked Booking Completed")
// }

// //async ==> a function that contain asynchronous process 

// async function name()
// {
//     await promiseFunction()
// }

//bookTrainTicket()

function login(username, password)
{   
    return new Promise((resolve, reject)=>{
        if(username === "Admin" && password === "Admin@123")
        {
            resolve("Login Successful")
        }
        else
        {
            reject("Login Failed")
        }
    })
}

async function checkLogin()
{
    try
    {
       const result = await login("Admin43434", "Admin@123")
       console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }

}

checkLogin()
