const arr1 = ["a", "b"];
const arr2 = ["b", "c"];
const arr3 = ["b", "e", "c"];

function intersection(arr1, arr2, arr3) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const set3 = new Set(arr3);

  const commonValues = [];
  for (const value of set1) {
    if (set2.has(value) && set3.has(value)) {
      commonValues.push(value);
    }
  }
  return commonValues;
}
const commonValues = intersection(arr1, arr2, arr3);
console.log(commonValues);
