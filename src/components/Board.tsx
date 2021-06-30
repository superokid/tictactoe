import React, { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import { Squares, SquareIndex } from "../types";

interface Props {}

const Board = (props: Props) => {
  const [squares, setSquares] = useState<Squares>(Array(9).fill(null));

  const handleClick = (i: SquareIndex) => {
    const newState = [...squares];
    newState[i] = "O";
    setSquares(newState);
  };

  const renderSquare = (i: SquareIndex) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)}></Square>;
  };

  return (
    <Container>
      <Row>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Row>
      <Row>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Row>
      <Row>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Row>
    </Container>
  );
};

export default Board;

const Container = styled.div``;

const Row = styled.div`
  display: flex;
`;
