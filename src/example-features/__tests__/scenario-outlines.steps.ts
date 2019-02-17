import { defineFeature, loadFeature } from 'jest-cucumber'

import { OnlineSales } from '../online-sales'

const feature = loadFeature(
  './src/example-features/__tests__/scenario-outlines.feature',
)

defineFeature(feature, test => {
  let onlineSales: OnlineSales
  let salesPrice: number | null

  beforeEach(() => {
    onlineSales = new OnlineSales()
  })

  test('Selling an <Item>', ({ given, when, then }) => {
    given(/^I have a\(n\) (.*)$/, item => {
      onlineSales.listItem(item)
    })

    when(/^I sell the (.*)$/, item => {
      salesPrice = onlineSales.sellItem(item)
    })

    then(/^I should get \$(\d+)$/, expectedSalesPrice => {
      expect(salesPrice).toBe(parseInt(expectedSalesPrice, 10))
    })
  })
})
