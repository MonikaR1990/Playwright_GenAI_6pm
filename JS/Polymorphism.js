//poly - many
//morph - form

//Polymporphsim --> 2 types
//1. Method Overloading --> Compile time POlymorohism (not supported in Javascript)
//2. Method Overriding --> Run time POlymorohism

class Animal             //Parent Class
{
    sound()
    {
        console.log("Makes Sound")
    }
}

class Dog extends Animal
{
    sound()
    {
        console.log("Barking")
    }
}
class Cat extends Animal
{
    sound()
    {
        console.log("Meow")
    }
}
class Lion extends Animal
{
    sound()
    {
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

class Payment            //Parent Class
{
    pay(amount)
    {
        console.log("Processing Payment")
    }
}

class UPI extends Payment
{
    pay(amount)
    {
        console.log("Paid " + amount + " using UPI")
    }
}

class CreditCard extends Payment
{   
    pay(amount)
    {
        console.log("Paid " + amount + " using Credit Card")
    }
}

