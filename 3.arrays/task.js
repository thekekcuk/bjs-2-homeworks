'use strict'
// function compareArrays(arr1, arr2) {
//   let result;
//   if (arr1.length == arr2.length) {
//     result = arr1.every((item, idx) => arr1[idx] == arr2[idx]);
//   } else {
//     result = false;
//   }
//   return result;
// }
// console.log (compareArrays([11, 22, 33, 54], [11, 22, 33]));

function compareArrays(arr1, arr2) {
  let result;
  result = (arr1.every((item, idx) => arr1[idx] == arr2[idx])) && arr1.length == arr2.length;
  return result;
}
console.log (compareArrays([11, 22, 33, 54], [11, 22, 33]));


function advancedFilter(arr) {
  let resultArr = arr.filter(elem => elem > 0).filter(elem => elem % 3 === 0).map(elem => elem * 10);
  return resultArr; // array
}

advancedFilter([1, 6, 3, 20, 30, -1, -2, -3])