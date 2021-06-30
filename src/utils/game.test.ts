import { calculateWinner } from "./game";

describe("game utils", () => {
  test("no winner", () => {
    const res = calculateWinner([
      null,
      null,
      null,
      "X",
      "O",
      "X",
      null,
      null,
      null,
    ]);
    expect(res).toBeNull();
  });

  test("X winner", () => {
    const res = calculateWinner([
      null,
      null,
      null,
      "X",
      "X",
      "X",
      null,
      null,
      null,
    ]);
    expect(res).toBe("X");
  });

  test("O winner", () => {
    const res = calculateWinner([
      "O",
      "O",
      "O",
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
    expect(res).toBe("O");
  });
});
