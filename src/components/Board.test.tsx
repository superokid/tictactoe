import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./Board";

describe("<Board/>", () => {
  test("render with empty board", () => {
    render(<Component />);
    const linkElement = screen.queryByText(/O/i);
    expect(linkElement).toBeNull();
  });

  test("render player after click", () => {});

  test("winning condition", () => {});
});
