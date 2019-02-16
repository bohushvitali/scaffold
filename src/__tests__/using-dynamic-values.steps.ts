import { defineFeature, loadFeature } from 'jest-cucumber'

import { BankAccount } from '../bank-account'

const feature = loadFeature('./src/__tests__/using-dynamic-values.feature')

defineFeature(feature, test => {
  let myAccount: BankAccount

  beforeEach(() => {
    myAccount = new BankAccount()
  })

  test('Depositing a paycheck', ({ given, when, then }) => {
    given(/^my account balance is \$(\d+)$/, balance => {
      myAccount.deposit(parseInt(balance, 10))
    })

    when(/^I get paid \$(\d+) for writing some awesome code$/, paycheck => {
      myAccount.deposit(parseInt(paycheck, 10))
    })

    then(/^my account balance should be \$(\d+)$/, expectedBalance => {
      expect(myAccount.balance).toBe(parseInt(expectedBalance, 10))
    })
  })
})
