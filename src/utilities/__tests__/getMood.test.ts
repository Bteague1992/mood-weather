import { describe, it, expect } from "vitest";
import { getMood } from "../getMood";

describe("getMood", () => {
  it("returns 'Energetic'", () => {
    const result = getMood(80, 65, 8, 10, 10, 5);
    expect(result.mood).toBe("Energetic");
  });
  it("returns 'Cozy'", () => {
    const result = getMood(60, 50, 4, 70, 85, 5);
    expect(result.mood).toBe("Cozy");
  });
  it("returns 'Sleepy'", () => {
    const result = getMood(65, 50, 3, 20, 70, 5);
    expect(result.mood).toBe("Sleepy");
  });
  it("returns 'Chill'", () => {
    const result = getMood(70, 55, 5, 10, 30, 5);
    expect(result.mood).toBe("Chill");
  });
  it("returns 'Adventurous'", () => {
    const result = getMood(95, 75, 5, 10, 20, 10);
    expect(result.mood).toBe("Adventurous");
  });
  it("returns 'Productive'", () => {
    const result = getMood(72, 60, 5, 10, 40, 10);
    expect(result.mood).toBe("Productive");
  });
});
