import React from 'react';

function TaxResult({ taxableIncome, tax }) {
  return (
    <div>
      <h2>Results</h2>
      <p>Taxable Income: {taxableIncome}</p>
      <p>Tax: {tax}</p>
    </div>
  );
}

export default TaxResult;
