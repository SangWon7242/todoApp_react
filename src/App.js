import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [numbersRecord, setNumbersRecord] = useState([]);

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number + 1);
  };

  const saveNumbers = () => {
    setNumber(0);
    setNumbersRecord([...numbersRecord, number]);
  };

  const resetRecord = () => {
    setNumber(0);
    setNumbersRecord([]);
  };

  const numberList = () => {
    if (numbersRecord.length !== 0) {
      return (
        <>
          <h1>숫자 기록</h1>
          <nav>
            <ul>
              {numbersRecord.map((value, index) => (
                <li key={index}>
                  {index + 1}번 : {value}
                </li>
              ))}
            </ul>
          </nav>
        </>
      );
    }

    return <h1>기록 없음</h1>;
  };

  return (
    <>
      <div>숫자 : {number}</div>
      <div>
        <button onClick={increaseNumber}>증가</button>
        &nbsp;
        <button onClick={decreaseNumber}>감소</button>
        &nbsp;
        <button onClick={saveNumbers}>기록</button>
        &nbsp;
        <button onClick={resetRecord}>초기화</button>
      </div>
      {numberList()}
    </>
  );
}

export default App;
