import React from 'react';

function DeductionsForm({ deductions, setDeductions }) {
  return (
    <div>
      <label>Deductions: </label>
      <input
        type="number"
        value={deductions}
        onChange={(e) => setDeductions(e.target.value)}
      />
    </div>
  );
}

export default DeductionsForm;
