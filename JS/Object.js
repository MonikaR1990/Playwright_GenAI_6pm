let car = {
    brand: "TATA",
    model: "MZ10",
    price: 800000,
    color: "Red"
}    //Object Literal way

console.log(car)

//Object is collection of key value pair, object define real world entities
//key, perperty

let bus = new Object() //new Object() constructor way

bus.model = "M167"
bus.brand = "Toyato"
bus.color = "Red"
bus.seatCount = 45

console.log(bus)

//Access properties of Objects dot notation
console.log(car.brand)
console.log(car.color)

//Bracket Notation
console.log(car["color"])
console.log(bus["seatCount"])

let person = {
    name: "Bala",
    age: 22,
    city: "Madurai"  
}

console.log(person)

//Add Property
person.state ="Tamilnadu"
person.phone = 76768767868

console.log(person)

//Update Property
person.city = "Trichy"

console.log(person)

//Remove Property

delete person.city
delete person.state

console.log(person)

//Nested Object
let employee = {
    ename: "Mani",
    empId: 123,
    address:
    {
        city: "Trichy",
        state: "Tamilnadu"
    },
    display: function()
    {
        console.log("Welcome")
        console.log("Employee Name: " + this.ename)
        console.log("Employee City: " + this.address.city)
    },
    skills: ["Java", "JS", "Playwright", "Selenium"]
}

console.log(employee.empId)
console.log(employee.address.city)
console.log(employee.address.state)
console.log(employee.skills[1])


employee.display()

//Array of Obejcts
let students = [
{
    sid: 101,
    sname: "John" 
},
{
    sid: 102,
    sname: "Ravi"
},
{
    sid: 103,
    sname: "Ram"
}]

console.log(students[1].sid)
console.log(students[2].sname)

//Loop (for...in)

for(let k in employee)
{
    console.log(k)
}

for(let key in employee)
{
    console.log(employee[key])
}

//Object
console.log(Object.keys(employee)) //string[]

console.log(Object.values(employee)) //string[]

console.log(Object.entries(employee)) //string[] two dimensional

let obj1 = {
    name: "Ratha"
}

let obj2 = {
    age: 25
}

let obj3 = {
    id: 101
}

let result = Object.assign({}, obj1, obj2, obj3) //copy or merge objects

console.log(result)


let teacher = {
    name: "Shaji",
    class: 6,
    subject: "Maths"
}

//Object.freeze(teacher)

// teacher.class = 7 //you can't able to modify the property values

// teacher.id = 10001 //can't able to create or delete property

// console.log(teacher)

Object.seal(teacher)

teacher.class = 8 //you can able to modify the property values

teacher.id = 10001 //can't able to create or delete property

console.log(teacher)

/*
| Feature         | Freeze   | Seal  |
| --------------- | ------   | ----  |
| Update existing | ❌      | ✅    |
| Add property    | ❌      | ❌    |
| Delete property | ❌      | ❌    |


*/

console.log("name" in teacher)

let object1 = {
    name: "Pavi"
}
let object2 = {
    name: "Pavi"
}

console.log(object1===object2)

let newEmployee = {
    name: "Mani",
    id: 101, 
    salary: 26000,
    shift: "Night"
}

let copyEmployee = {
    ...newEmployee
}

console.log(copyEmployee)

