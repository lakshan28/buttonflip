import React, { useEffect, useRef } from "react";
function Timer() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count => {
        if (count === 10) {
          clearInterval(intervalId);
          return count;
        } else return count + 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <div>The count is: {count}</div>;
}
export default Timer;
