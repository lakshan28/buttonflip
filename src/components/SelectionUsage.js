import React from "react";
import CommonSelection from "./CommonSelection";

export default function SelectionUsage() {
  const [satus, setStatus] = React.useState("");

  const changeStatus = event => {
    setStatus(event.target.value);
  };

  console.log(satus);

  const arrata2 =["loka","loka2","loka3",]

  return (
    <div>
     
      <CommonSelection value={satus} 
      onChange={changeStatus} label="ghjgjh"  
      arrata2={arrata2}
     
     />
    </div>
  );
}


