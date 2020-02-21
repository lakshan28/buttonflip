import React, { useEffect, useReducer, useRef } from "react";
const useForceRerender = () => useReducer(state => !state, false)[1];

const Counter = () => {
  const forceRerender = useForceRerender();
  const refCount = useRef(10);

  useEffect(() => {
    refCount.current += 1;
  });

  return (
    <>
      <p>Count: {refCount.current}</p>
      <p>
        <button onClick={forceRerender}>Increment Counter</button>
      </p>
    </>
  );
};

export default Counter;
