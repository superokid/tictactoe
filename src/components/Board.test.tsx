import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Component from "./Board";

describe("<Board/>", () => {
  test("empty board", () => {
    const { queryByText } = render(<Component />);
    expect(queryByText(/O/i)).toBeNull();
  });

  test("render player after click", () => {
    const { getAllByRole, queryByText } = render(<Component />);
    const dom = getAllByRole("button");
    fireEvent.click(dom[0]);

    const value = queryByText(/O/i);
    expect(value).toBeInTheDocument();
  });

  test("winning condition", () => {});
});
