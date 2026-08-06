//Encapsulation means wrapping of data (variable) and methods (functions) into a single unit (class) and restricting direct access to the data

//Encapsulation = Data Hiding + Controlled Data

class BankAccount
{
    #balance //Private Variable -10000
    constructor(amount)
    {
        this.#balance = amount
    }
    deposit(amount)
    {
        if(amount>0)
        {
            this.#balance += amount
        }
    }
    withdraw(amount)
    {
        if(amount<=this.#balance)
        {
            this.#balance -= amount
        }
    }
    getbalance()
    {
        return this.#balance
    }
    
}

let acc = new BankAccount(0)
acc.deposit(-10000)
console.log(acc.getbalance())

