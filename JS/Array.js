//Aaray ==>

let nameList = ["Bala", "Meena", "Mathi", "Muthu", "Mani"] //Literal Way

//Array is a data structure which is used to store multiple
//data into a single variable
//It is based on Index (Index starts from)

let ename = new Array("Beena", "Meena", "Geena") //Constructor way

console.log(nameList[1])
console.log(nameList[0])
console.log(nameList[4])

nameList[0] = "Malar"
console.log(nameList)

ename[2] = "Leena"
console.log(ename)

//Array Prperty (length)
console.log(nameList.length) //Array elements/values count

//Add Elements in an Array
let fruits = ["Apple", "Orange", "Mango", "Pine Apple"]

fruits.push("Banana") //add the element at the end
fruits.unshift("Guva") //Add the element at the first

console.log(fruits)

//Remove Elements from an Array

fruits.pop() //Remove the last element
fruits.shift() //Remove the first Element

console.log(fruits)

let data = ["A", 1, 2, "B", true, undefined, null] //tuple

//splice() ==> this method is used to add, remove, modify elements from array. It modifies the original array

let cart = ["Mobile", "Laptop", "Tablet", 'Airbuds']

//cart.splice(0, 2)

//1 --> start index
//2 --> how many element need to remove

console.log(cart)

cart.splice(0, 0, "Head Set", "Speaker")

console.log(cart)

cart.splice(0) //Remove all elements after index 1

console.log(cart)

//slice() ==> method used to extract the portion of array and return a new array (without modifying the original array)

let users = ["Ramu", "Somnu", "Banu", "Meenu"]

for(let user of users)
{
    console.log(user)
}


let newUsers = users.slice(1, 2)

//1 ==> start index //Include
//3 ==> end index //Exclude

console.log(users)
console.log(newUsers)

//let updateUser = users.slice(1)

let updateUser = users.slice(-2)

console.log(updateUser)

//splice()
//modify the original Array
//add, remove, update

//slice()
//new an array return
//original array not changed
//extraction purpose

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

console.log(arr1.concat(arr2))

let courses = ["Java", "JS", "Python", "C", "C++", "JS"]

let [x, y, z,  ...remaining] = courses //rest operator

console.log(x)
console.log(y)
console.log(z)

console.log(remaining)


// console.log(courses.join("-")) //Adds all the elements of an array into a string

// console.log(courses.includes("C#")) //Determines whether an array includes a certain element, returning true or false as appropriate.

// console.log(courses.indexOf("JS")) //Return the index value of the element in the array

// console.log(courses.lastIndexOf("JS")) 

// //loop in array

// console.log(courses)

// console.log(courses[0])
// console.log(courses[1])
// console.log(courses[2])

// for(let i = 0; i<courses.length; i++)
// {
//     console.log(courses[i])
// }

// //for...of
// for(let lang of courses)
// {
//     console.log(lang)
// }

// //find()

// let num1 = [10, 20, 30, 40, 50]

// let num1Find = num1.find(x=>x>20) //It returns the first matching element

// console.log(num1Find)

// //filter()

// let num2Find = num1.filter(x=>x>20) //It returns all mathching elements 

// console.log(num2Find)

// let num3Find = num1.map(x=>x*2)
// console.log(num3Find) //Transform each elements 

// console.log(num1.every(x=>x>20))
// console.log(num1.some(x=>x>20))

// let colors = ["Red", "Blue", "Green"]

// console.log(colors[0])

// let[a, b, c] = colors

// console.log(a) //Red

// console.log(b) //Blue

// console.log(c)  //Green

//spread Operator

let a = [1, 2]
let b = [...a, 3, 4]

let c = [...b, 5, 6]

console.log(b)
console.log(c)



















