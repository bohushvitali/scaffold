"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_cucumber_1 = require("jest-cucumber");
const online_sales_1 = require("../../src/online-sales");
const feature = jest_cucumber_1.loadFeature('./test/features/scenario-outlines.feature');
jest_cucumber_1.defineFeature(feature, (test) => {
    let onlineSales;
    let salesPrice;
    beforeEach(() => {
        onlineSales = new online_sales_1.OnlineSales();
    });
    test('Selling an <Item>', ({ given, when, then }) => {
        given(/^I have a\(n\) (.*)$/, (item) => {
            onlineSales.listItem(item);
        });
        when(/^I sell the (.*)$/, (item) => {
            salesPrice = onlineSales.sellItem(item);
        });
        then(/^I should get \$(\d+)$/, (expectedSalesPrice) => {
            expect(salesPrice).toBe(parseInt(expectedSalesPrice, 10));
        });
    });
});
//# sourceMappingURL=scenario-outlines.steps.js.map