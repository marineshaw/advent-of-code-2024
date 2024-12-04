import { getLinesOfFile } from "../shared/getLinesFromFile";

export const computeTotalDistance = (
  firstList: number[],
  secondList: number[]
): number => {
  const orderedFirstList = firstList.sort();
  const orderedSecondList = secondList.sort();

  let total = 0;

  for (let i = 0; i < orderedFirstList.length; i++) {
    if (orderedFirstList[i] !== orderedSecondList[i]) {
      total += Math.abs(orderedFirstList[i] - orderedSecondList[i]);
    }
  }
  return total;
};

const getInputList = async () => {
  const lines = await getLinesOfFile("./src/dayOne/input.txt");
  let firstList: number[] = [];
  let secondList: number[] = [];
  lines.forEach((line) => {
    const parsedLine = line.split("   ");
    firstList.push(parseInt(parsedLine[0]));
    secondList.push(parseInt(parsedLine[1]));
  });
  return { firstList, secondList };
};

export const areNumbersInListUniques = (list: number[]): boolean => {
  const listSet = new Set(list);
  if (listSet.size !== list.length) {
    return false;
  }
  return true;
};

export const computeSimilarity = (
  list: number[],
  reference: number[]
): number => {
  let similarity = 0;
  reference.forEach((ref) => {
    const occurences = list.filter((num) => num === ref).length;
    similarity += ref * occurences;
  });
  return similarity;
};

// Computing

const lists = await getInputList();

console.log(
  "The total distance between the two lists is ",
  computeTotalDistance(lists.firstList, lists.secondList)
);

console.log(areNumbersInListUniques(lists.firstList));

console.log(
  "The similarity between the two list is ",
  computeSimilarity(lists.firstList, lists.secondList)
);
