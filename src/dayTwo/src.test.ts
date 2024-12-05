import { expect, it } from "vitest";
import { computeSafeRecordsTotal, isReportSafe } from "./src";

it("says the report is safe for the first example", () => {
  expect(isReportSafe([7, 6, 4, 2, 1])).toBe(true);
});

it("says the report is unsafe if two adjacent levels differs from more than 3", () => {
  expect(isReportSafe([1, 2, 7, 8, 9])).toBe(false);
  expect(isReportSafe([9, 7, 6, 2, 1])).toBe(false);
});

it("says the report is unsafe if some levels are increasing and other are decreasing", () => {
  expect(isReportSafe([1, 3, 2, 4, 5])).toBe(false);
});

it("compute the number of safe records for the example", () => {
  expect(
    computeSafeRecordsTotal([
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ])
  ).toBe(2);
});
