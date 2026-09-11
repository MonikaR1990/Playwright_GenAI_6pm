//TypeScript = JavaScript + Type Safety

//TypeScript code is compiled into JavaScript 

//JavaScript = Dynamic Typing
//TypeScript = Static Typing

let sname = "Bala"

sname = "Balaji"

console.log(sname)

//Variable Decalaration

let username: string = "Bala"

console.log(username)

let age: number = 12

let isActive: boolean = true

// let variable: datatype

let value: null = null

let data: undefined = undefined

let id: bigint = 1212323232323n

let uniqueId: symbol = Symbol("Emp_ID")

//JS Operators same in TS

let b = [10, 20, 30, "ten", true] //tuple

b.push("Fourty")
b.push("Fifty")
b.push(true)

console.log(b)

let fruits: string[] = ["Mango", "Orange", "Apple"]

let vegis: string = "Carrot"

let price: number[] = [10, 20, 30, 40] //literal Way 

let amount: number = 10

let ids: Array<number> = [101, 102, 103] //Constructor Way

let employee: [string, number] = ["Bala", 101]

//push, pop, shift, unshift, find, filter, map, concat, join, indexOf
//Object.keys(), Object.values(), Object.entries()
//Destructing, Spread Operator, Rest Operator
//Objec.freeze(), Object.seal()



/*
TypeScript Code
    |
TSC COMPILER (TYPE)
    |
Javascript Code
    |
Node Run (or) Browser

*/

//datatype => type

//Typescript type
//1. string
//2. number
//3. boolean
//4. null
//5. undefined
//6. bigInt
//7. Symbol
//8. any
//9. unknown
//10. void
//11. never
//12. object
//13. class
//14. interface

//Object

// let user = {
//     name: "Bala",
//     id: 101
// }

// user.id = 102

let user: {
    name: string
    id: number
    isActive: boolean
} = {
    name: "Bala",
    id: 101,
    isActive: true
}

let admin: {
    name: string
    id: number
    age: number
} = {
    name: "Bala",
    id: 101,
    age: 33
}

let age1: number
let price1: number[] = [67,7987,7897]

function add(a:number, b:number)
{
    console.log(a+b)
}

add(67, 78)

function sum(a:any, b:any)
{
    console.log(a+b)
}

sum("67", 78)

function salaryCalculation(basic:number, hra:number, allowance:number)
{
    let salary:number = basic + hra + allowance
    console.log(salary)
}

for(let i:number = 1; i<=5; i++)
{
    console.log(i)
}

//let ename: string //global


class Student
{
    name: string     //class level variable or instance variable
    id: number
    age:number      
    constructor(name: string, id: number, age:number)  //name and id are local variables
    {
        this.name = name
        this.id = id
        this.age = age
    }
    display(): void
    {
        console.log(this.name)
        console.log(this.id)
    }
    getName(): string
    {
        return this.name
    }
    getId(): number
    {
        return this.id
    }
}

let s = new Student("Mani", 101, 12)
s.display()

//Employee (eName, empid, empAddress, empSalary)
//methods (empDetails, getEmpSalary)

//OOPS
//class
//object

//inheritance (single, multilevel, heirarchical, hybrid)
//polymorphism (method overiding)
//abstraction
//encapsulation

//abstraction achive in 2 ways
// abstract class
// interface

abstract class Animal
{
    abstract sound(): void //abstarct method

    sleep(): void          //normal method
    {
        console.log("Sleeping")
    }
}

class Dog extends Animal
{
    //oviriding
    sound(): void {
        console.log("Barking")
    }
}

class Cat extends Animal
{
    sound(): void {
        console.log("Meow")
    }
}

class Lion extends Animal
{
    sound(): void {
        console.log("Roaring")       
    }
}

let a;

a = new Dog()
a.sound()

a = new Cat()
a.sound()

a = new Lion()
a.sound()

interface Animals
{
    sound(): void //abstract method  //unimpletemented
}

class Dogs implements Animals
{
    sound(): void {
        console.log("Barking")
    }
}
class Cats implements Animals
{
    sound(): void {             //implemented method
        console.log("Meowing")   
    }
}
class Lions implements Animals
{
    sound(): void {
        console.log("Roarring")
    }
}

let c

c = new Cats()
c.sound()

c = new Dogs()
c.sound()

c = new Lions()
c.sound()

interface Students
{
    name: string
    age: number
    id: number
    city: string
    state?: string    //? optional property

    display(): void
}

let s1: Students = {
    name: "Bala",
    age: 12,
    id: 101,
    city: "Madurai",
    state: "Tamilnadu",
    
    display(): void
    {
        console.log(this.name)
        console.log(this.id)
        console.log(this.age)
        console.log(this.city)
    }
}

s1.display()

let s2: Students = {
    name: "Mani",
    age: 13,
    id: 102,
    city: "Trichy",

    display(): void
    {

    }
}

//TypeScript automatically understands the structure.

let s3: Students = {
    name: "Shaji",
    age: 22,
    id: 101,
    city: "Chennai",

    display()
    {

    }
}

