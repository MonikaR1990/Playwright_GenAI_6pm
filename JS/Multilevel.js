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

class Puppy extends Dog
{
    play()
    {
        console.log("Playing")
    }
}

let p = new Puppy()
p.eat()
p.sleep()
p.bark()
p.play()


class Customer           //Parent Class
{
    constructor(name, customerId)
    {
        this.name = name
        this.customerId = customerId
    }
    showCustmorerDetails()
    {
        console.log("Customer Name: " + this.name)
        console.log("Customer Id: " + this.customerId)
    }
}

class BankAccount extends Customer
{
    constructor(name, customerId, accountNumber, balance)
    {
       super(name, customerId)
       this.accountNumber = accountNumber
       this.balance = balance
    }
    showBankAccountDetails()
    {
        super.showCustmorerDetails()
        console.log("Account Number: " + this.accountNumber)
        console.log("Balance: " + this.balance)
    }
}

class SavingsAccount extends BankAccount
{
    constructor(name, customerId, accountNumber, balance, interest)
    {
        super(name, customerId, accountNumber, balance)
        this.interest = interest
    }
    showSavingsAccountDetails()
    {
        super.showBankAccountDetails()
        console.log("Savings Account Interst: "+ this.interest)
    }
}

// let ba = new BankAccount("Bala", "IBS565675", 7897897987, 5000)
// ba.showBankAccountDetails()

let sa = new SavingsAccount("Meena", "TTY6778", 6678679869, 60000, "10.10%")
sa.showSavingsAccountDetails()


