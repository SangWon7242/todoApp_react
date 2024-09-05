import React, { useState } from "react";
import "./App.css";

const NumberRecordForm = ({
  number,
  increaseNumber,
  decreaseNumber,
  saveNumbers,
  resetRecord,
}) => {
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
    </>
  );
};

const NumberRecordListItem = ({ number, index, removeNumber }) => {
  const [editModeStatus, setEditModeStatus] = useState(false);

  return (
    <li key={index}>
      {editModeStatus ? (
        <>
          <input
            type="number"
            value={number}
            placeholder="숫자를 입력해주세요."
          />
          &nbsp;
          <button onClick={() => setEditModeStatus(false)}>수정완료</button>
          &nbsp;
          <button onClick={() => setEditModeStatus(false)}>수정취소</button>
        </>
      ) : (
        <>
          <span>
            {index + 1}번 : {number}
          </span>
          &nbsp;
          <button onClick={() => setEditModeStatus(true)}>수정</button>
          &nbsp;
          <button onClick={() => removeNumber(index)}>삭제</button>
        </>
      )}
    </li>
  );
};

const NumberRecordList = ({ numbersRecord, removeNumber }) => {
  if (numbersRecord.length !== 0) {
    return (
      <>
        <h1>숫자 기록</h1>
        <nav>
          <ul>
            {numbersRecord.map((number, index) => (
              <NumberRecordListItem
                number={number}
                index={index}
                removeNumber={removeNumber}
              />
            ))}
          </ul>
        </nav>
      </>
    );
  }

  return <h1>기록 없음</h1>;
};

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

  const removeNumber = (index) => {
    const new_numbers = numbersRecord.filter((_, _index) => _index !== index);
    setNumbersRecord(new_numbers);
  };

  const resetRecord = () => {
    setNumber(0);
    setNumbersRecord([]);
  };

  return (
    <>
      <NumberRecordForm
        number={number}
        increaseNumber={increaseNumber}
        decreaseNumber={decreaseNumber}
        saveNumbers={saveNumbers}
        resetRecord={resetRecord}
      />
      <NumberRecordList
        numbersRecord={numbersRecord}
        removeNumber={removeNumber}
      />
    </>
  );
}

export default App;
