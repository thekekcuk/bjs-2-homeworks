'use strict'
function compereArrays(arr1, arr2) {
  let result = arr1.every((item, idx) => {return (arr1[idx] == arr2[idx])});
  return result;
}
console.log (compereArrays([11, 22, 33], [11, 22, 33]));


function advancedFilter(arr) {
  let resultArr = arr.filter(elem => elem > 0).filter(elem => elem % 3 === 0).map(elem => elem * 10);
  return resultArr; // array
}

advancedFilter([1, 6, 3, 20, 30, -1, -2, -3])