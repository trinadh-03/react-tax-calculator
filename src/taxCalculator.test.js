import { calTax } from './taxCalculator.jsx';

describe("calTax function", () => {
  
  test("returns zero tax when income is less than or equal to deductions", () => {
    expect(calTax(300000, 400000)).toEqual({ taxableIncome: 0, tax: 0 });
  });

  test("applies 0% tax for income up to 400,000", () => {
    expect(calTax(400000, 0)).toEqual({ taxableIncome: 400000, tax: 0 });
  });

  test("applies 5% tax for income between 400,001 and 800,000", () => {
    expect(calTax(600000, 0)).toEqual({ taxableIncome: 600000, tax: 30000 });
  });

  test("applies 10% tax for income between 800,001 and 1,200,000", () => {
    expect(calTax(1000000, 0)).toEqual({ taxableIncome: 1000000, tax: 100000 });
  });

  test("applies 15% tax for income between 1,200,001 and 1,600,000", () => {
    expect(calTax(1500000, 0)).toEqual({ taxableIncome: 1500000, tax: 225000 });
  });

  test("applies 20% tax for income between 1,600,001 and 2,000,000", () => {
    expect(calTax(1800000, 0)).toEqual({ taxableIncome: 1800000, tax: 360000 });
  });

  test("applies 25% tax for income between 2,000,001 and 2,400,000", () => {
    expect(calTax(2200000, 0)).toEqual({ taxableIncome: 2200000, tax: 550000 });
  });

  test("applies 30% tax for income above 2,400,000", () => {
    expect(calTax(3000000, 0)).toEqual({ taxableIncome: 3000000, tax: 900000 });
  });
});
