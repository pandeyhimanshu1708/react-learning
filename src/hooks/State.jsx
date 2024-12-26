import { useState } from "react";

export const State = () => {
  // let value = 0;
  // let handleButtonClick = ()=>{
  //     value++;
  //     console.log(value);
  // }
  // console.log(useState());
  
  let [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <section className="main-div">
        <h1>{count}</h1>
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 text-white border-none py-2 px-4 cursor-pointer rounded-md"
        >
          Increment
        </button>
      </section>
    </>
  );
};

// useState hooks
// Syntax
// const [count,setCount] = useState(0);
