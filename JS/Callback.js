function greet(callback)
{
    console.log("Hello")
    callback()
}

function sayHi()
{
    console.log("Hi..")
}

//greet(sayHi)

//A callback is a function passed as a parameter to the another function, which is executed later

function orderFood(callback)
{
    console.log("Preparing Food")

    setTimeout(()=>{
        console.log("Food is Ready")
        callback()
    }, 3000) 
}

function foodDelivered()
{
    console.log("Customer has been Delivered")
}
//orderFood(foodDelivered)

function processPayment(amount, callback)
{
    console.log(`Processing Payment of Rs. ${amount}`)

    setTimeout(()=>{
        const paymentSuccessful = true

        if(paymentSuccessful)
        {
            callback("Success", amount)
        }
        else
        {
            callback("Failed", amount)
        }
    }, 3000)
}

function paymentResult(status, amount)
{
    if(status === "Success")
    {
        console.log(`Payment of Rs. ${amount} completed Sucessfully`)
    }
    else
    {
        console.log(`Payment of Rs. ${amount} completed Failed`)
    }
}

//processPayment(2500, paymentResult)

function login(callback)
{
    console.log("1. Login Successfull")

    setTimeout(()=>{
        callback()
    }, 2000)
}

function getProfile(callback)
{
    console.log("2. Profile Loaded")

    setTimeout(()=>{
        callback()
    },2000)
}

function getOrder(callback)
{
    console.log("3. Order Received")

    setTimeout(()=>{
        callback()
    },2000)
}

function makePayment(callback)
{
    console.log("3. Payment Successful")

    setTimeout(()=>{
        callback()
    },2000)
}
function check()
{

}

//callback hell problem

// login(()=>{
//     getProfile(()=>{
//         getOrder(()=>{
//             makePayment(()=>{
//                 console.log("5. Process Completed")
//             })
//         })
//     })
// })


