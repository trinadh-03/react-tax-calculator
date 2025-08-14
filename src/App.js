import React, { useState } from 'react';
import IncomeForm from './income_Form';
import DeductionsForm from './deduction_Form';
import './App.css';
import { calTax } from './taxCalculator';
import TaxResult from './TaxResult';
function App() {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');

  const{ taxableIncome, tax} = calTax(Number(income), Number(deductions))
  

  return (
    <div className="App">
      <h1>Tax Calculator</h1>
      <IncomeForm income={income} setIncome={setIncome} />
      <DeductionsForm deductions={deductions} setDeductions={setDeductions} />
      {income &&(
        <TaxResult taxableIncome={taxableIncome} tax={tax} />
      )}
    </div>
  );
}

export default App;
