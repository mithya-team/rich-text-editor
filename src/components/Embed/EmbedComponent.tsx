import React, { useState } from "react";

export const EmbedComponent = (props: any) => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        padding: "4px",
        backgroundColor: "#F5F5F5",
        width: "33%",
        borderRadius: "7px",
      }}
    >
      <div>Custom component message:{props.msg} </div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
};
