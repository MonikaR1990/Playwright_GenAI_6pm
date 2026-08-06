//Abstraction in Javascript

//It means hiding the internal implementation details and showing only necessary features to the user

//Hide Complex logic
//improves security
//make code easier to use
//reduce code complexity

//Abstraction achieved in 2 ways
//1. Abstract Class
//2. Interface

//These two techniques are not supported in Javascript

//here abstraction can achieve
//1. Abstraction using class methods
//
class Payment
{
    pay()
    {
        console.log("Processing Payment")
    }
}

let pay = new Payment()
pay.pay()


function add(a, b)
{
    console.log(a+b)
}


add(8, 8)

class Car
{ 
    start()
    {
        this.#checkEngine()
        console.log("Engine Started")
    }
    #checkEngine()      //private method 
    {
        console.log("Checking Engine")
    }
}


let c = new Car()
c.start()

class Order
{
    placeOrder()
    {
        this.#validateProduct()
        this.#processPayment()
        console.log("Order Placed")
    }


    #validateProduct()
    {
        console.log("Product Available")
    }
    #processPayment()
    {
        console.log("Payment Completed")
    }
}


let ord = new Order()
ord.placeOrder()
