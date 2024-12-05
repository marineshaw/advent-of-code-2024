import { getLinesOfFile } from "../shared/getLinesFromFile";

export const areLevelsDangerous = (
  firstLevel: number,
  secondLevel: number,
  sign: number
): boolean => {
  if ((secondLevel - firstLevel) * sign < 0) {
    return true;
  }
  return secondLevel === firstLevel || Math.abs(firstLevel - secondLevel) > 3;
};

export const isReportSafe = (list: number[]): boolean => {
  let isSafe = true;
  const sign = Math.sign(list[1] - list[0]);
  if (sign === 0) {
    return false;
  }
  for (let i = 0; i < list.length - 1; i++) {
    if (isSafe) {
      isSafe = !areLevelsDangerous(list[i], list[i + 1], sign);
    }
  }

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

export const isReportReallySafe = (list: number[]): boolean => {
  let isSafe = isReportSafe(list);
  if (isSafe) return true;

  list.forEach((_, index) => {
    const newList = [...list];
    newList.splice(index, 1);
    if (isReportSafe(newList)) {
      isSafe = true;
    }
  });

  return isSafe;
};

export const computeReallySafeRecordsTotal = (records: number[][]): number => {
  let safeTotal = 0;

  records.forEach((record) => {
    if (isReportReallySafe(record) && !isReportSafe(record))
      console.log(record);
    if (isReportReallySafe(record)) {
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

console.log(
  "The total number of really safe reports is ",
  computeReallySafeRecordsTotal(records)
);
