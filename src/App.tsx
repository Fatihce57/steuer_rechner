import React, { ChangeEvent, FC, useState } from "react";
import "./App.css";
import Tax from "./Components/TaxList";
import { ITax } from "./Interfaces";

const App: FC = () => {
  const [month, setMonth] = useState<string>("");
  const [income, setIncome] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [taxList, setTaxList] = useState<ITax[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "month") {
      setMonth(event.target.value);
    } else {
      setIncome(Number(event.target.value));
    }
  };

  const calculateTax = () => {
    const y = (income - 10347) / 10000;
    const z = (income - 14926) / 10000;

    if (income <= 10347) {
      setTax(0);
    } else if (income <= 14926) {
      setTax((1088.67 * y + 1400) * y);
    } else if (income <= 58596) {
      setTax((206.43 * z + 2397) * z + 869.32);
    } else if (income <= 277825) {
      setTax(0.42 * income - 9336.45);
    } else if (income >= 277826) {
      setTax(0.45 * income - 17671.2);
    }
  };

  const addTax = () => {
    const newTax = { month: month, tax: tax };

    setTaxList([...taxList, newTax]);
    setMonth("");
    setTax(0);
    setIncome(0);
  };

  return (
    <div className="App">
      <div>
        <input
          type="month"
          name="month"
          value={month}
          onChange={handleChange}
        />
        <input
          type="number"
          name="income"
          className="income"
          placeholder="Enter your income"
          value={income}
          onChange={handleChange}
        />
      </div>
      <button onClick={calculateTax}>Calculate</button>
      <br />
      <input type="number" name="result" className="result" value={tax} />
      <button onClick={addTax}>Add</button>

      <div>
        {taxList.map((tax: ITax, key: number) => {
          return <Tax tax={tax} />;
        })}
      </div>
    </div>
  );
};

export default App;
