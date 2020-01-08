import React from "react";

const Breaker = () => {
  const doesNotExist = null;
  return <button onClick={() => doesNotExist.activateBug}>BREAKER</button>;
};

export default Breaker;
