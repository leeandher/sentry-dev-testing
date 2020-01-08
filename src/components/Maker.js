import React from "react";

const Maker = () => {
  const exists = () => alert("Working!");
  return <button onClick={exists}>MAKER</button>;
};

export default Maker;
