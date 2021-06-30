import React from "react";
import styled from "styled-components";
import { Player } from "../types";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  value: Player | null;
}

const Square = ({ onClick, value }: Props) => {
  return (
    <Container onClick={onClick}>
      <PlayerSymbol>{value}</PlayerSymbol>
    </Container>
  );
};

export default Square;

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #999;
  height: 150px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 150px;
`;

const PlayerSymbol = styled.div`
  font-size: 100px;
`;
