import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./Square";

describe("<Square/>", () => {
  test("render empty", () => {
    const { queryByText } = render(
      <Component value={null} onClick={() => {}} />
    );
    expect(queryByText(/O/i)).toBeNull();
  });

  test("render with correct value", () => {
    const { getByText, queryByText } = render(
      <Component value={"O"} onClick={() => {}} />
    );
    expect(getByText(/O/i)).toBeInTheDocument();
    expect(queryByText(/I/i)).toBeNull();
  });
});
