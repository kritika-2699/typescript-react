import React, { useState } from "react";

const StateLessComponent = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default StateLessComponent;
