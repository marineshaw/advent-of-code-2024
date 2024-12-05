import { expect, it } from "vitest";
import {
  areLevelsDangerous,
  computeReallySafeRecordsTotal,
  computeSafeRecordsTotal,
  isReportReallySafe,
  isReportSafe,
} from "./src";

it("says the levels are dangerous if they differ from more than 3", () => {
  expect(areLevelsDangerous(1, 5, 1)).toBe(true);
});

it("says the levels are dangerous if they are equal", () => {
  expect(areLevelsDangerous(1, 5, 1)).toBe(true);
});

it("says the levels aren't dangerous if they differ from 2", () => {
  expect(areLevelsDangerous(6, 5, -1)).toBe(false);
});

it("says the levels are dangerous if they are increasing but the sign is negative", () => {
  expect(areLevelsDangerous(4, 5, -1)).toBe(true);
});

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
it("should be really safe", () => {
  expect(isReportReallySafe([76, 70, 69, 66, 63, 60, 58])).toBe(true);
});

it("should not be really safe", () => {
  expect(isReportReallySafe([79, 75, 69, 66, 61, 60, 58])).toBe(false);
});

it("should not be really safe", () => {
  expect(isReportReallySafe([89, 87, 84, 77, 76, 74, 72])).toBe(false);
});

it("compute the number of really safe records for the example", () => {
  expect(
    computeReallySafeRecordsTotal([
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ])
  ).toBe(4);
});
