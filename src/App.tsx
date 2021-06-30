import React from "react";
import styled from "styled-components";
import Board from "./components/Board";

function App() {
  return (
    <Layout>
      <Board></Board>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: aliceblue;
`;
