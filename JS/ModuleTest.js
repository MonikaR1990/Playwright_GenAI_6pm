import { greet } from "./Modules.js";
// import { add } from "./Modules.js"
//import { add, sub, multiply, division } from "./Modules.js";

// import * as calculator from './Modules.js'
import  greetings   from "./Modules.js";
//import helloWorld from "./Modules.js"

import { pi } from "./Modules.js";

import { Student, LoginPage } from "./Modules.js";

import { person } from "./Modules.js";

//import { LoginPage } from "./Modules.js";

//greet()
// calculator.add(6, 7)
// calculator.sub(10, 5)
// calculator.multiply(10, 10)
// calculator.division(35, 7)
// calculator.greetings()

greetings()
//helloWorld()
let r = 5
let h = 4

console.log(pi*r*r)

console.log(2*pi*r*h)

let s = new Student("Bala", 120)
s.display()


let l = new LoginPage("Hari", "Hari@123")
l.login()


console.log(person)