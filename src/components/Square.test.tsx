import React from "react";
import { render } from "@testing-library/react";
import Component from "./Square";

describe("<Square/>", () => {
  test("render empty", () => {
    const { queryByText } = render(
      <Component value={null} onClick={() => {}} />
    );
    expect(queryByText("O")).toBeNull();
  });

  test("render with correct value", () => {
    const { getByText, queryByText } = render(
      <Component value={"O"} onClick={() => {}} />
    );
    expect(getByText("O")).toBeInTheDocument();
    expect(queryByText("X")).toBeNull();
  });
});
