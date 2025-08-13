import React, { useState } from 'react';
import IncomeForm from './IncomeForm';
import DeductionsForm from './DeductionsForm';
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
