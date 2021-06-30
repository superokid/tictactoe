import React, { useState } from "react";
import styled from "styled-components";
import Square from "./Square";
import { Squares, SquareIndex } from "../types";
import { calculateWinner } from "../utils/game";

interface Props {}

const initialSquares = Array(9).fill(null);

const Board = (props: Props) => {
  const [squares, setSquares] = useState<Squares>(initialSquares);
  const [isSecondPlayer, setSecondPlayer] = useState<boolean>(false);

  const winner = calculateWinner(squares);

  const handleClick = (i: SquareIndex) => {
    if (winner || squares[i]) {
      return;
    }
    const newState = [...squares];
    newState[i] = isSecondPlayer ? "X" : "O";
    setSquares(newState);
    setSecondPlayer(!isSecondPlayer);
  };

  const renderSquare = (i: SquareIndex) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)}></Square>;
  };

  const handleReset = () => {
    setSquares(initialSquares);
  };

  return (
    <>
      <Status>{winner && `winner: ${winner}`}</Status>
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
      <Reset data-testid="reset" onClick={handleReset}>
        Reset
      </Reset>
    </>
  );
};

export default Board;

const Status = styled.div`
  margin-bottom: 1.5em;
  font-size: 20px;
`;

const Container = styled.div``;

const Row = styled.div`
  display: flex;
`;

const Reset = styled.button`
  font-size: 20px;
  margin-top: 20px;
`;
