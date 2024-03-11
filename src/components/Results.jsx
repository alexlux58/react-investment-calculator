import React from "react";
import { calculateInvestmentResults } from "../util/investment";

const Results = ({ values }) => {
  const {
    investmentAmount,
    annualInvestment,
    expectedReturn,
    investmentDuration,
  } = values;

  const resultData = calculateInvestmentResults({
    initialInvestment: investmentAmount,
    annualInvestment,
    expectedReturn,
    duration: investmentDuration,
  });

  //   console.log("resultData", resultData);

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest Earned</th>
          <th>Value at Year End</th>
          <th>Annual Investment</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.interest}</td>
              <td>{data.valueEndOfYear}</td>
              <td>{data.annualInvestment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
