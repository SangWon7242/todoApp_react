import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [numbersRecord, setNumbersRecord] = useState([]);

  return (
    <>
      <div>숫자 : {number}</div>
      {numbersRecord.length !== 0 ? (
        <div>기록 된 숫자 : {JSON.stringify(numbersRecord)}</div>
      ) : (
        <div>기록 없음</div>
      )}
      <div>
        <button onClick={() => setNumber(number + 1)}>증가</button>
        &nbsp;
        <button onClick={() => setNumber(number - 1)}>감소</button>
        &nbsp;
        <button
          onClick={() => {
            setNumber(0);
            setNumbersRecord([...numbersRecord, number]);
          }}
        >
          기록
        </button>
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
    </>
  );
}

export default App;
