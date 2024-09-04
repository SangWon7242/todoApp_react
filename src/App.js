import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div>숫자 : {number}</div>
      <div>
        <button onClick={() => setNumber(number + 1)}>증가</button>
        <button onClick={() => setNumber(number - 1)}>감소</button>
      </div>
    </>
  );
}

export default App;
