import React, { useState } from 'react';
import IncomeForm from './income_Form';
import DeductionsForm from './deduction_Form';
import './App.css';

function App() {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');

  return (
    <div className="App">
      <h1>Tax Calculator</h1>
      <IncomeForm income={income} setIncome={setIncome} />
      <DeductionsForm deductions={deductions} setDeductions={setDeductions} />
    </div>
  );
}

export default App;
