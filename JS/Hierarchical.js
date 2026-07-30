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

class Person         //Parent Class
{
    constructor(name, age, id)
    {
        this.name = name
        this.age = age
        this.id = id
    }
    showDetails()
    {
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("ID: " + this.id)
    }
}

class Doctor extends Person
{
    constructor(name, age, id, specialization)
    {
        super(name, age, id)
        this.specialization = specialization
    }
    displayDoctorDetails()
    {
        super.showDetails()
        console.log("Specialization: " + this.specialization)
    }
}

class Nurse extends Person
{
    constructor(name, age, id, shift)
    {
        super(name, age, id)
        this.shift = shift
    }
    displayNurseDetails()
    {
        super.showDetails()
        console.log("Shift Details: " + this.shift)
    }
}

class Patient extends Person
{
    constructor(name, age, id, disease)
    {
        super(name, age, id)
        this.disease = disease
    }
    displayPatientDetails()
    {
        super.showDetails()
        console.log("Disease: " + this.disease)
    }
}

let pa = new Patient("Mani", 34, 6787, "Fever")
pa.displayPatientDetails()

let da = new Doctor("Muthu", 34, 6787, "Endomologist")
da.displayDoctorDetails()

let na = new Nurse("Rani", 31, 6787676, "Night Shift")
na.displayNurseDetails()