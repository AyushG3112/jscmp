import { getArrayDiff, getArrayIntersection, getType } from "../utils";

function comparer(
  { fileA, dataA },
  { fileB, dataB },
  parent = "",
  outputArray = []
) {
  const keysA = Object.keys(dataA);
  const keysB = Object.keys(dataB);
  const common = getArrayIntersection(keysA, keysB)
  const aDiff = getArrayDiff(keysA, keysB);
  const bDiff = getArrayDiff(keysB, keysA);
  for (let key of aDiff) {
    outputArray.push({
      type: "missing",
      field: parent + key,
      fileA,
      typeA: getType(dataA[key]),
      fileB,
      typeB: getType(dataB[key])
    });
  }
  for (let key of bDiff) {
    outputArray.push({
      type: "missing",
      field: parent + key,
      fileA,
      typeA: getType(dataA[key]),
      fileB,
      typeB: getType(dataB[key])
    });
  }
  for (let key of common) {
    if (
      getType(dataA[key]) !==
      getType(dataB[key])
    ) {
      outputArray.push({
        type: "typeMismatch",
        field: parent + key,
        fileA,
        typeA: getType(dataA[key]),
        fileB,
        typeB: getType(dataB[key])
      });
    } else if (
      getType(dataA[key]) == "[object Object]"
    ) {
      comparer(
        { fileA, dataA: dataA[key] },
        { fileB, dataB: dataB[key] },
        key + ".",
        outputArray
      );
    }
  }
}

export default function compare(dataA, dataB) {
  const result = [];
  comparer(dataA, dataB, "", result);
  return result;
}
