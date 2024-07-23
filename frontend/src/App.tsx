import { useState, useEffect } from "react";

export function App() {
  const [numbers, setNumbers] = useState<number[]>([]);

  function getRandomNumber() {
    fetch("http://localhost:3030/api/hitme")
      .then((res) => res.json())
      .then((data) => {
        setNumbers([...numbers, data.number])
      })
  }


  return (
    <div className="App">
      <h1>Give me a Sign</h1>
      <button className="btn" onClick={() => getRandomNumber()} >
        Hit me BABY
      </button>
      <ul className="number-ul">
        {numbers.map((number, index) => (
          <li key={index}>
            {number}
          </li>
        ))}
      </ul>
      <h1>One more time!</h1>
    </div>
  );
}