export function greet()
{
    console.log("Hello...EveryOne!!")
}

export function add(a, b)
{
    console.log(a+b)
}

export function sub(a, b)
{
    console.log(a-b)
}

export function multiply(a, b)
{
    console.log(a*b)
}

export function division(a, b)
{
    console.log(a/b)
}

export default function greetings()
{
    console.log("Welcome to JavaScript")
}


// export default function helloWorld()
// {
//     console.log("Welcome to Hello Wo")
// }

export const pi = 3.14 

// const schoolName = "ABC School"

// export default schoolName

export class Student
{
    constructor(name, id)
    {
        this.name = name
        this.id = id
    }
    display()
    {
        console.log(this.name)
        console.log(this.name)
    }
}


export class LoginPage
{
    constructor(username, password)
    {
        this.username = username
        this.password = password
    }
    login()
    {
        console.log(this.username)
        console.log(this.password)
        console.log("Click Button Click")
    }
}

export let person = {
    name: "Ravi",
    id: 101
}
