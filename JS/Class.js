//OOPS
//1. Class
//2. Object
//3. Inheritance
//4. Polymorphism
//5. Abstraction 
//6. Encapsulation

//syntax
// class ClassName
// {
//     //properties //name
//                  //age

//     //methods  
//     methodName()
//     {
        
//     }
// }

class Hotel
{
    tea = 15
    coffee = 20
    menu = "Pongal"

    display()
    {
        console.log("Tea Price :" + this.tea)
        console.log("Coffee Price :" + this.coffee)
        console.log("Today Menu: " + this.menu)
    }

}

let server = new Hotel()

console.log(server.tea)

server.tea = 17

console.log(server.tea)

server.display()


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

let s2 = new Student()
console.log(s2.age)
s2.displayDetails()


class Car
{
    constructor(brand, color, model, mileage)
    {
        this.brand = brand //TATA
        this.color = color  //White
        this.model = model  //SH3
        this.mileage = mileage //120
    }

    start()
    {
        console.log("Car Started")
    }
    stop()
    {
        console.log("Car Stopped")
    }
    speed()
    {
        console.log("Car Speed Increased")
    }
    displayCarDetails()
    {
        console.log(this.brand)
        console.log(this.color)
        console.log(this.mileage)
        console.log(this.model)
    }
}

let c1 = new Car("TATA", "White", "SM3", 120)
c1.displayCarDetails()



class LoginPage
{
    constructor(page, username, password)
    {
        this.page = page
        this.username = username
        this.password = password
    }
    navigate()
    {
        console.log("Page: " + this.page)
    }
    setCredencials()
    {
        console.log("Username: " + this.username)
        console.log("Password: " + this.password)
    }
    submit()
    {
        console.log("Submit Login")
    }
}

let login = new LoginPage("Facebook.com", "monika1787", "moni78789")
login.navigate()
login.setCredencials()
login.submit()





// function add(a, b)
// {
//     console.log(a+b)
// }

// add(12, 14)
