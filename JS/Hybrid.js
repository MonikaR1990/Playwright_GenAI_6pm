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

class Dog extends Animal
{   
    bark()
    {
        console.log("Barking")
    }
    
}

class Cat extends Animal
{
    meow()
    {
        console.log("Meowing")
    }
}

class Loin extends Animal
{
    roar()
    {
        console.log("Roaring")
    }
}

class Puppy extends Dog
{
    play()
    {
        console.log("Playing")
    }
}

let l = new Loin()
l.eat()
l.sleep()
l.roar()