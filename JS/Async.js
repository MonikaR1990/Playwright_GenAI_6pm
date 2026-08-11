//Synchronous

// console.log("Task 1")
// console.log("Task 2") //delay
// console.log("Task 3")

//Synchronous mean one task executes after another

//Asynchronous means JavaScript doesn't wait for long running task

console.log("Task 1")

setTimeout(()=>{
    console.log("Task 2")
}, 3000)

console.log("Task 3")

//Node.js
//1. setTimeOut
//2. setInterval
//3. fetch
//4. DOM Elements
//5. GeoLoaction

setInterval(()=>{
    console.log("Hello")
}, 1000)

//Asyncronous Process Handle in Three Ways (delay process perform without blocking other process)
//1. CallBack
//2. Promise
//3. Async-Await


