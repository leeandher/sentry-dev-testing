import React from "react";
import styled from "styled-components";

import Breaker from "./components/Breaker";
import Maker from "./components/Maker";

const App = () => {
  return (
    <StylishPage>
      <Maker />
      <Breaker />
    </StylishPage>
  );
};

const StylishPage = styled.div`
  button {
    margin: 20px auto;
    padding: 15px 30px;
    display: block;
    border: 2px solid white;
    color: white;
    font-weight: bold;
    background: transparent;
    border-radius: 2rem;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    &:hover {
      background: white;
      color: darkcyan;
      cursor: pointer;
    }
  }
`;

export default App;
