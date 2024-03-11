import Header from "./components/Header";
import Results from "./components/Results";
import { UserInput } from "./components/UserInput";
import { useState } from "react";

function App() {
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [investmentDuration, setInvestmentDuration] = useState(10);

  function handleChange(event) {
    const { id, value } = event.target;
    switch (id) {
      case "investment-amount":
        setInvestmentAmount(value);
        break;
      case "annual-investment":
        setAnnualInvestment(value);
        break;
      case "expected-return":
        setExpectedReturn(value);
        break;
      case "investment-duration":
        setInvestmentDuration(value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Header />
      <UserInput
        handleChange={handleChange}
        investmentAmount={investmentAmount}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        investmentDuration={investmentDuration}
      />
      <Results
        values={{
          investmentAmount,
          annualInvestment,
          expectedReturn,
          investmentDuration,
        }}
      />
    </>
  );
}

export default App;
