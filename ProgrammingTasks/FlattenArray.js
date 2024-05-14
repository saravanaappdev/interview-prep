// Flatten Array

let input = [1, 2, [54, 3, 4, 5], [3, 5, [98, 78, 78, [98, 434, 54]]]];

let allValues = [],
  values;

function flattenArray(input) {
  let allInputs = [];
  for (let val of input) {
    if (Array.isArray(val)) {
      allInputs.push(...flattenArray(val));
    } else {
      allInputs.push(val);
    }
  }
  return allInputs;
}

console.log(flattenArray(input));
