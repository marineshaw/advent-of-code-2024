import { getLinesOfFile } from "../shared/getLinesFromFile";

export const isReportSafe = (list: number[]): boolean => {
  let isSafe = true;
  list.forEach((level, index) => {
    if (index < list.length - 1 && Math.abs(level - list[index + 1]) > 3) {
      isSafe = false;
    }
  });
  list.reduce((prev, current, index) => {
    const prevValue = Math.abs(prev);
    const prevSign = Math.sign(prev);
    const sign = Math.sign(current - prevValue);
    if (sign === 0 || (index !== 1 && prevSign != sign)) {
      isSafe = false;
    }
    if (Math.abs(current - prevValue) > 3) {
      isSafe = false;
    }
    return sign * current;
  });

  return isSafe;
};

export const computeSafeRecordsTotal = (records: number[][]): number => {
  let safeTotal = 0;

  records.forEach((record) => {
    if (isReportSafe(record)) {
      safeTotal += 1;
    }
  });
  return safeTotal;
};

const getInputRecords = async () => {
  const lines = await getLinesOfFile("./src/dayTwo/input.txt");
  return lines.map((line) => line.split(" ").map((num) => parseInt(num)));
};

// Computing

const records = await getInputRecords();

console.log(
  "The total number of safe reports is ",
  computeSafeRecordsTotal(records)
);
