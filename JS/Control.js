//Control Statement
//1. Conditional Statements
//2. Iterative Statements (Looping)
//3. Jumping Statements

//Conditional Statements
//1. simple if
//2. if...else
//3. else if ladder (muli)
//4. Nested if
//5. Switch Case

//simple if
// if(condition)
// {
//     //code
// }

if(5==="5")
{
    console.log("Hello")
}
else
{
    console.log("Hi...")
}

let mark = 22

if(mark>=90 && mark<=100)
{
    console.log("A Grade")
}
else if(mark>=75 && mark<=89)
{
    console.log("B Grade")
}
else if(mark>=60 && mark<=74)
{
    console.log("C Grade")
}
else if(mark>=50 && mark<=59)
{
    console.log("E Grade")
}
else if(mark>=35 && mark<=49)
{
    console.log("D Grade")
}
else
{
    console.log("Fail")
}

let userId = 122123
let password = "Info@1234"
let role = "user"


if(userId===1234 && password==="Info@1234")
{
    if(role==="Admin")
    {
        console.log("Admin Dashboard Opened")
    }
    else
    {
        console.log("Wrong Role")
    }
}
else
{
    console.log("Wrong Credentials")
}


let age = 17
let hasVoterId = false

if(age>=18)
{
    if(hasVoterId)
    {
        console.log("Able to Vote")
    }
    else
    {
        console.log("Not Able to Vote")
    }
}
else
{
    console.log("Not Eligible for Vote")
}

//Switch Case
let day = 8

switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("WednesDay")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Wrong Day")    
}


let num1 = 20
let num2 = 10

let op = "/"

switch(op)
{
    case "+":
        console.log(num1+num2)
        break
    case "-":
        console.log(num1+num2)
        break
    case "*":
        console.log(num1*num2)
        break
    case "/":
        console.log(num1/num2)
        break
    default:
        console.log("Wrong Operator")
}

let light = "Yellow"

switch(light)
{
    case "Red":
        console.log("STOP")
        break
    case "Green":
        console.log("GO")
        break
    case "Yellow":
        console.log("READY")
        break
    default:
        console.log("Wrong Signal Light")
}