"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_cucumber_1 = require("jest-cucumber");
const bank_account_1 = require("../../src/bank-account");
const feature = jest_cucumber_1.loadFeature('./test/features/using-dynamic-values.feature');
jest_cucumber_1.defineFeature(feature, (test) => {
    let myAccount;
    beforeEach(() => {
        myAccount = new bank_account_1.BankAccount();
    });
    test('Depositing a paycheck', ({ given, when, then, pending }) => {
        given(/^my account balance is \$(\d+)$/, (balance) => {
            myAccount.deposit(parseInt(balance, 10));
        });
        when(/^I get paid \$(\d+) for writing some awesome code$/, (paycheck) => {
            myAccount.deposit(parseInt(paycheck, 10));
        });
        then(/^my account balance should be \$(\d+)$/, (expectedBalance) => {
            expect(myAccount.balance).toBe(parseInt(expectedBalance, 10));
        });
    });
});
//# sourceMappingURL=using-dynamic-values.steps.js.map