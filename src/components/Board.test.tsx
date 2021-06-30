import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Component from "./Board";

describe("<Board/>", () => {
  test("empty board", () => {
    const { queryByText } = render(<Component />);
    expect(queryByText("O")).toBeNull();
    expect(queryByText("X")).toBeNull();
  });

  test("render player after click", () => {
    const { getAllByRole, queryByText } = render(<Component />);
    const dom = getAllByRole("button");
    fireEvent.click(dom[0]);

    const value = queryByText(/O/i);
    expect(value).toBeInTheDocument();
  });

  test("clicked the same square", () => {
    const { getAllByRole, queryByText } = render(<Component />);
    const dom = getAllByRole("button");
    fireEvent.click(dom[0]);
    fireEvent.click(dom[0]);

    const value = queryByText(/O/i);
    expect(value).toBeInTheDocument();
  });

  test("winning condition", () => {
    const { getAllByRole, queryByText } = render(<Component />);
    expect(queryByText(/winner/i)).toBeNull();
    const dom = getAllByRole("button");
    fireEvent.click(dom[0]);
    fireEvent.click(dom[3]);
    fireEvent.click(dom[1]);
    fireEvent.click(dom[4]);
    fireEvent.click(dom[2]);
    fireEvent.click(dom[5]);

    const winner = queryByText(/winner: O/i);
    expect(winner).toBeInTheDocument();
  });

  test("reset game", () => {
    const { getAllByRole, queryByText, getByTestId } = render(<Component />);
    expect(queryByText(/winner/i)).toBeNull();
    const dom = getAllByRole("button");
    fireEvent.click(dom[0]);
    fireEvent.click(dom[3]);
    fireEvent.click(dom[1]);
    fireEvent.click(dom[4]);
    fireEvent.click(dom[2]);
    fireEvent.click(dom[5]);

    const resetButton = getByTestId("reset");
    fireEvent.click(resetButton);
    expect(queryByText("O")).toBeNull();
    expect(queryByText("X")).toBeNull();
  });
});
