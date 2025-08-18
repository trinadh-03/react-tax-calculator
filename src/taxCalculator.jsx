export function calTax(income, deductions) {
  const taxableIncome = Math.max(income - deductions, 0);

  // slab limits and rates
  const slabs = [
    { limit: 400000, rate: 0 },
    { limit: 800000, rate: 0.05 },
    { limit: 1200000, rate: 0.10 },
    { limit: 1600000, rate: 0.15 },
    { limit: 2000000, rate: 0.20 },
    { limit: 2400000, rate: 0.25 },
    { limit: Infinity, rate: 0.30 }
  ];

  // find first slab where taxableIncome <= limit
  const { rate } = slabs.find(slab => taxableIncome <= slab.limit);

  const tax = Math.round(taxableIncome * rate);

  return { taxableIncome, tax };
  
}
