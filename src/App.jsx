import React, { useState } from "react";  
import IncomeForm from "./income_Form";   
import DeductionsForm from "./deduction_Form"; 
import "./App.css";  
import { calTax } from "./taxCalculator";   
import TaxResult from "./TaxResult";        

export default function App() {
  const [income, setIncome] = useState("");       
  const [deductions, setDeductions] = useState("");

  const incomeNum = Number(income) || 0;
  const deductionsNum = Number(deductions) || 0;

  const { taxableIncome, tax } = calTax(incomeNum, deductionsNum);   

  const showResult = income !== "";

  return (
    <div className="App">
      <h1>Tax Calculator</h1>

      {/* Pass values & setters into the forms */}
      <IncomeForm income={income} setIncome={setIncome} />
      <DeductionsForm deductions={deductions} setDeductions={setDeductions} />

      {showResult && <TaxResult taxableIncome={taxableIncome} tax={tax} />}
    </div>
  );
}




