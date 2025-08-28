import { describe, it, expect } from "vitest";
import { subtract } from "../subtract";

describe("subtract", () => {
  it("adds two numbers", () => {
    expect(subtract).toBeDefined();
    expect(subtract(3, 2)).toBe(1);
  });
});
