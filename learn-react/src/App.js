import React, { useState, useEffect } from "react";

import Todo from "./components/Todo";
import "./index.scss";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // 렌더링이 일어날 때마다 실행되는 코드
    console.log("렌더링");
  });

  useEffect(() => {
    // []안의 값에 변화가 있을 때에만 실행된다.
    console.log("count : ", count);
  }, [count]);

  useEffect(() => {
    console.log("input : ", input);
  }, [input]);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
