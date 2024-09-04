import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [numbersRecord, setNumbersRecord] = useState([]);

  const saveNumbers = () => {
    setNumber(0);
    setNumbersRecord([...numbersRecord, number]);
  };

  return (
    <>
      <div>숫자 : {number}</div>
      <div>
        <button onClick={() => setNumber(number + 1)}>증가</button>
        &nbsp;
        <button onClick={() => setNumber(number - 1)}>감소</button>
        &nbsp;
        <button onClick={() => saveNumbers()}>기록</button>
        &nbsp;
        <button
          onClick={() => {
            setNumber(0);
            setNumbersRecord([]);
          }}
        >
          초기화
        </button>
      </div>
      {numbersRecord.length !== 0 ? (
        <nav>
          <ul>
            {numbersRecord.map((value, index) => (
              <li key={index}>
                {index + 1}번 : {value}
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <h1>기록 없음</h1>
      )}
    </>
  );
}

export default App;
