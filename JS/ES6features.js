//ES6 introduced major improvements to JavaScript, making code shorter, cleaner, easier to maintain
//ES6 - ECMA Script
//2015

//ES6 features

//let and const

// let age = 25

// age = 25

// //let age = 55 let can't allow redeclaration

// const number = 25 

// //number = 25  const can't allow reassign and redeclaration

// //let and const are block level scope

// {
//     let x = 10;
//     let y = 20;

//     console.log(x)
//     console.log(y)
// }

// // console.log(x) //Error
// // console.log(y) //Error

// //Arrow Function

// //add(5, 7)

// let add = (a, b)=> console.log(a+b)

// let greet = ()=> console.log("Hello")

// let greeting = name => console.log("Hello " + name)

// let sum = (a, b) => {
//     return a+b
// }

// let getMessage = () => {
//     console.log("Hello")
//     console.log("Hi...")
// }

// //Arrow function do not have their own this

// add(5, 7)

// // add(5, 7)

// // function add(a, b)
// // {
// //     console.log(a+b)
// // }

// // add(5, 7)

// const employee = {
//     name: "John",

//     greet: ()=>
//     {
//         console.log(this.name)
//     }
// }

// //employee.greet()

// //Template Literals

// let ename = "Mary"
// let eid = 101

// console.log("My Name is " + ename + " and my id is " + eid)

// console.log(`My Name is ${ename} and my id is ${eid}`)

// let sname = "Ravi"
// let rank = "First"

// console.log(`Student Name: ${sname} - Studen's Rank - ${rank}`)

// // ${} - call variables

// //Default Parameter

// function message(name="Guest")
// {
//     console.log(`Hello ${name}`)
// }

// message()
// message("Banu")

// //Rest Parameter
// function add(a, b)
// {
//     console.log(a+b)
// }

// add(10, 20)

// add(10, 20, 30)

//Rest Vs Spread

function check(...number)
{
    console.log(number)
}

check(10, 20, 30)

let numbers = [10, 20, 30]

let newNumbers = [...numbers, 40, 50]

console.log(newNumbers)

const [n1, n2, ...remaining] = newNumbers

console.log(n1)
console.log(n2)
console.log(remaining)

//Destructuring 
//Destructing allows us to extract values from arrays and objects easily

//1. Array Destructing
//2. Object Destructing

let prices = [10, 20, 30, 40, 50]

let [p1, p2, p3, ...p4] = prices

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)

const person = {
    pname: "John",
    age: 30,
    city: "Trichy"
}

const {pname, age, city} = person

console.log(pname)
console.log(age)
console.log(city)

//classes (ES6)
class Student
{
    name = "Bala"
    age = 25
    id = 101

    displayDetails()
    {
        console.log("Student Name: " + this.name)
        console.log("Student Age: " + this.age)
        console.log("Student ID: " + this.id)
    }

}

let s1 = new Student()
console.log(s1.name)
s1.displayDetails()

//Class Inheritance
//extends
//super

//Modules
//export
//import


//Promises

//async - await

//for...of Vs for...in

//Symbol