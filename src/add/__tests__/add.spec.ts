import { describe, it, expect } from "vitest";
import { add } from "..";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add).toBeDefined();
    expect(add(1, 2)).toBe(3);
  });
});
