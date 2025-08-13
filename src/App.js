import React, { useState } from 'react';
import IncomeForm from './IncomeForm';
import DeductionsForm from './DeductionsForm';
import './App.css';

function App() {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');

  const{ taxableIncome, tax} = calculate(Number(income), Number(deductions))
  return(
    <div classname="App">
     <h1>Tax Calculations</h1>
    </div>
  )


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
