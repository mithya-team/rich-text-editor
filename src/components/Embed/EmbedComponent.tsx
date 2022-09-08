import React, { useState } from "react";

export const EmbedComponent = (props: any) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Custom component message:{props.msg} </div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>
  );
};
