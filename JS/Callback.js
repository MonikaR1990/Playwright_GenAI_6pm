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

processPayment(2500, paymentResult)

