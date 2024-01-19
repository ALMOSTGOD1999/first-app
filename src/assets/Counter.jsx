import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(5);
  console.log("components rendered");
  console.log(`num: ${num}`);
  const changeNum = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={changeNum}>increment</button>
    </div>
  );
}
