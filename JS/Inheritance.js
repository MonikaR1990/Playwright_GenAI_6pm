//Inheritance

//one class (child class) that acquires properities and methods from another class (parent) using extend keyword is known as Inheritance

class Animal                        //Parent
{
    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}

class Dog extends Animal                    //Childx
{   
    bark()
    {
        console.log("Barking")
    }
    
}

let d = new Dog()
d.eat()
d.sleep()
d.bark()


//Four Types of Inheritance
//1. Single Inheritance
//2. Multilevel Inheritance
//3. Hierarchical Inheritance
//4. Hybrid Inheritance

//5. Multiple Inheritance
