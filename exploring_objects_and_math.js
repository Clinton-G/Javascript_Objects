function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. The New Balance is ${this.balance}.`);
    } else {
        console.log("Error, Try Again");
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount}. The New Balance is ${this.balance}.`);
    } else if (amount > this.balance) {
        console.log("YOU AINT GOT THAT MUCH");
    } else {
        console.log("Eror, Please Try Again");
    }
};

// IDK if I got this one right, big math aint my forte lol
Account.prototype.calculateCompoundInterest = function(rate, timesCompounded, years) {
    const principal = this.balance;
    const annualRate = rate / 100;
    const amount = principal* Math.pow((1 + annualRate / timesCompounded), timesCompounded * years);
    
    return amount;
};

