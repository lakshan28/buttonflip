import React, { useEffect, useRef } from "react";

function RefReact() {
  const refInput = useRef();

  useEffect(() => {
    const { current } = refInput;

    const handleFocus = () => {
      console.log("input is focussed");
    };
    const handleBlur = () => {
      console.log("input is blurred");
    };

    current.addEventListener("focus", handleFocus);
    current.addEventListener("blur", handleBlur);

    return () => {
      current.removeEventListener("focus", handleFocus);
      current.removeEventListener("blur", handleBlur);
    };
  });

  return (
    <p>
      <input type="text" ref={refInput} defaultValue="Focus me" />
    </p>
  );
}

export default RefReact;
