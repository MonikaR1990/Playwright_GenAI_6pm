greet() //hoisting

function greet()    //function defination //function without parameter
{
    console.log("Welcome")
}

greet()  //function call

if(1==1)
{
    greet()
}
else
{
    console.log("Hi")
}

greet()
greet()

function greetings(name)  //function with parameter
{
    console.log("Hello " + name)
}


greetings("Bala")


add(100000, 2000000)

add(10, 50)

function login(username, password)
{
    if(username === "admin" && password === "admin@123")
    {
        console.log("Login Successful")
    }
    else
    {
        console.log("Login Failed")
    }
}

login("admin", "admin123")


function add(a, b)    //function multiple parameter
{
    console.log(a+b)
}

add(3, 5) //30

let result1 = add(10, 20) + 10
console.log(result1)

function sum(a, b)
{
   return a+b
}

let answer = sum(10, 50) //60
console.log(answer)

console.log(sum(10, 50))


// let result2 = sum(10, 20) + 10
// console.log(result2)

function squareRoot(a)
{
    return a*a    
}

console.log(squareRoot(5))

let result = squareRoot(5)

console.log(result)

function calculateSalary(basic, hra, allowance)
{
    let salary = basic + hra + allowance
    return salary
}

let updatedSalary = calculateSalary(10000, 5000, 2000) + 3000
console.log(updatedSalary)

//console.log(sub(5, 2))  //hoisting problem

let sub = function(a, b)
{
    return a-b
}

console.log(sub(5, 2))

//callback

setTimeout(function(){
    console.log("Hello")
}, 3000)


