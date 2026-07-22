//1. Arithmetic Operators (+, -, *, /, %)
//2. Assignment Operators (=, +=, -=, *=, /=)
//3. Comparision Operators (==, ===, !=, !==, <, >, <=, >=) //boolean Result
//4. Logical Operators (&&, ||, !)
//7. Unary Operators (+, -, ++, --)
//5. String Operators (+)
//6. Ternary Operators ( ? :)
//7. typeOf Operator

let a = 10
let b = 20

console.log(a+b)
console.log(a-b)
console.log(a*b)


let c = 10

c += 5; //c = c + 5

console.log(c)

c -= 5 //c = c - 5

console.log(c)

c *= 2 //c = c * 2

console.log(c)

c /= 2 //c = 20/2

console.log(c)

//Comparision Operator

console.log(5==5) //true

console.log(5=="5") //true

console.log(5==="5") //Strict Equal

console.log(5!="5")

console.log(5!=="5") //Strict Not Equal

console.log(5>4)

console.log(5<=5)

//Logical Operator

console.log((5==5) && (5<=5) && (5==6))

console.log((5==4) || (5<5) || (5==6))

//! not operator

let isActive = true

console.log(!isActive)
console.log(!0) // 0 is falsy value
console.log(!1)
console.log(!3)
console.log(!"Hello")
console.log(!-5)
console.log(!null)
console.log(!undefined)
console.log(!NaN)  //Not an Number

//Unary Operator

let x = -1

let y = 5

console.log(y++) //Post increment

console.log(y) //6

console.log(y--) //Post decrement

console.log(y) //5

console.log(++y) //Pre Increment

console.log(--y) //Pre Decrement

let z = -5

console.log(z++)
console.log(z)

//String Operator
let s = "Five"
let t = 5

console.log("Five" + true + 5) //concatenation

//Ternary Operator

let result = (5==="5") ? "Pass" : "Fail"
console.log(result)

let age = 25
let hasVoterId = false

let newstatus = ((age>=18) && hasVoterId) ? "Eligible" : "Not Eligible"
console.log(newstatus)

let color = "Red"

let signal = ("color" === "Green") ? "GO" : "STOP"
console.log(signal)

let m;

console.log(typeof(color))
console.log(typeof(hasVoterId))
console.log(typeof(m))
console.log(typeof(age))


let str = "Angel"

str = 10

console.log(str)
