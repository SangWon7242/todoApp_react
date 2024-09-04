import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [numberRecord, setNumberRecord] = useState(null);

  return (
    <>
      <div>숫자 : {number}</div>
      {/*
      1. 숫자가 0인 경우, 0도 기록이 되어야 함
      2. 그럼에도 기록이 되지 않는 이유는 기록을 눌렀을 때 numberRecord가 0이기 때문
      3. 자바스크립트에서는 null, 0, false를 동격으로 취급함
      4. numberRecord --> numberRecord != null 변경 필요
      */}
      {numberRecord != null ? (
        <div>기록 된 숫자 : {numberRecord}</div>
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
            setNumberRecord(number);
          }}
        >
          기록
        </button>
        &nbsp;
        <button
          onClick={() => {
            setNumber(0);
            setNumberRecord(null);
          }}
        >
          초기화
        </button>
      </div>
    </>
  );
}

export default App;
