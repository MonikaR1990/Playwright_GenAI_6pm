let add = (a, b)=>console.log(a+b) //short way of function 

add(5, 8)

let greet = ()=>console.log("Hello")

greet()


// let sub = (a, b) => 
// {
//     return (a-b)    //explicit return
// }

console.log(sub(6, 4))

let salaryCalculation = (basic, hra, allowance) => basic + hra + allowance  //implicit return

console.log(salaryCalculation(10000, 5000, 2000))


let sub = (a, b) => (a*b)    //implicit return

let calculatePrice = (price, tax) =>{  
    let total = price + tax
    return total   //explicit return
}
