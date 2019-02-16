"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor() {
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}
exports.BankAccount = BankAccount;
//# sourceMappingURL=bank-account.js.map