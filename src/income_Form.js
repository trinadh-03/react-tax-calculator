import React from 'react';

function IncomeForm({ income, setIncome }) {
  return (
    <div>
      <label>Annual Income: </label>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
    </div>
  );
}

export default IncomeForm;
