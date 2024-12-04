import { expect, it } from "vitest";
import {
  areNumbersInListUniques,
  computeSimilarity,
  computeTotalDistance,
} from "./src";

it("gives 0 if lists are equal", () => {
  expect(computeTotalDistance([1, 5, 3, 2], [1, 5, 3, 2])).toBe(0);
});

it("gives the first numbers differs from 1", () => {
  expect(computeTotalDistance([1, 5, 3, 2], [0, 5, 3, 2])).toBe(1);
});

it("gives the right total for example given", () => {
  expect(computeTotalDistance([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3])).toBe(11);
});

it("says the list is unique if it has no duplicates", () => {
  expect(areNumbersInListUniques([1, 2, 3, 4, 5])).toBe(true);
});

it("says the list is not unique if it has duplicates", () => {
  expect(areNumbersInListUniques([1, 2, 2, 3, 4, 5])).toBe(false);
});

it("computes the similarity for the example", () => {
  expect(computeSimilarity([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3])).toBe(31);
});
