import { getLinesOfFile } from "../shared/getLinesFromFile";

export const computeMul = (input: string) => {
  if (
    !input.startsWith("(") ||
    !input.endsWith(")") ||
    !input.includes(",") ||
    input.includes(" ")
  ) {
    return 0;
  }
  const [num1, num2] = input.slice(1, -1).split(",");

  if (!/^\d+$/.test(num1) || !/^\d+$/.test(num2)) {
    return 0;
  }

  return parseInt(num1) * parseInt(num2);
};

export const computeAllMul = (input: string) => {
  const mulParts = input.split("mul");
  let total = 0;
  mulParts.forEach((part) => {
    if (part.startsWith("(")) {
      const endIndex = part.indexOf(")");
      if (endIndex === -1) {
        return;
      }
      const mul = computeMul(part.slice(0, endIndex + 1));
      total += mul;
      return;
    }
    return;
  });
  return total;
};

const getInput = async () => {
  const lines = await getLinesOfFile("./src/dayThree/input.txt");
  let input = "";
  lines.forEach((line) => {
    input += line;
  });

  return input;
};

// Computing

const input = await getInput();

console.log("The total is", computeAllMul(input));