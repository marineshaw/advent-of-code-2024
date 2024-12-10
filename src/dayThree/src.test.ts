import { expect, it } from "vitest";
import { computeAllMul, computeMul } from "./src";

it("multiplies two numbers if the syntax is correct", () => {
  expect(computeMul("(4,4326)")).toBe(17304);
  expect(computeMul("(44,46)")).toBe(2024);
});

it("does not multiply two numbers if the syntax is incorrect", () => {
  expect(computeMul("(44,46")).toBe(0);
  expect(computeMul("(4446)")).toBe(0);
  expect(computeMul("[44,46)")).toBe(0);
  expect(computeMul("(ezar,46)")).toBe(0);
  expect(computeMul("(4*")).toBe(0);
  expect(computeMul("(6,9!")).toBe(0);
  expect(computeMul("( 2 , 4 )")).toBe(0);
  expect(computeMul("(579,979who()")).toBe(0);
});

it("adds two multiplications if their syntaxes are correct", () => {
  expect(computeAllMul("mul(44,46)fmul(4,4326)")).toBe(19328);
});

it("compute all mul for given example", () => {
  expect(
    computeAllMul(
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
    )
  ).toBe(161);
});
