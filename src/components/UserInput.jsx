import React from "react";

export const UserInput = ({
  handleChange,
  investmentAmount,
  annualInvestment,
  expectedReturn,
  investmentDuration,
}) => {
  //   console.log("investmentAmount", investmentAmount);
  //   console.log("annualInvestment", annualInvestment);
  //   console.log("expectedReturn", expectedReturn);
  //   console.log("investmentDuration", investmentDuration);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment-amount">Initial Investment:</label>
          <input
            type="number"
            id="investment-amount"
            required
            value={investmentAmount}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="annual-investment">Annual Investment:</label>
          <input
            type="number"
            id="annual-investment"
            required
            value={annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return:</label>
          <input
            type="number"
            id="expected-return"
            required
            value={expectedReturn}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="investment-duration">Investment Duration:</label>
          <input
            type="number"
            id="investment-duration"
            required
            value={investmentDuration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
};
