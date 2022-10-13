const objectsEqual = (o1, o2) =>
  typeof o1 === "object" && Object.keys(o1).length > 0
    ? Object.keys(o1).length === Object.keys(o2).length &&
      Object.keys(o1).every((p) => objectsEqual(o1[p], o2[p]))
    : o1 === o2;

const arraysEqual = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  let equal = true;
  for (let i = 0; i < arr1.length; i++) {
    if (!objectsEqual(arr1[i], arr2[i])) {
      equal = false;
    }
    break;
  }
  return equal;
};

module.exports = arraysEqual;
