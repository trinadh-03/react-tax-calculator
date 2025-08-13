export function calTax(income, deductions){
    const taxableIncome = Math.max(income - deductions,0);
    let tax=0;

    const slabs=[
        { limit: 400000, rate:0},
        { limit: 800000, rate:0.05},
        { limit: 1200000, rate: 0.10 },
         { limit: 1600000, rate: 0.15 },
       { limit: 2000000, rate: 0.20 },
       { limit: 2400000, rate: 0.25 },
        { limit: Infinity, rate: 0.30 }

    ];
    let prevLimit = 0;

     for (let i = 0; i < slabs.length; i++) {
       const { limit, rate } = slabs[i];

        if (taxableIncome > prevLimit) {
           const incomeInSlab = Math.min(taxableIncome, limit) - prevLimit;
           tax += incomeInSlab * rate;
           prevLimit = limit;
        } else {
         break;
        }
  }

    return {
      taxableIncome,
      tax: Math.round(tax)
    };
}