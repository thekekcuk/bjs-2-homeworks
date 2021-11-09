'use strict'
function compereArrays(arr1, arr2) {
  let result = arr1.every(elem => arr1[elem] == arr2[elem]);
  return result;
}
console.log (compereArrays([1, 2, 3], [1, 2, 3]));


function advancedFilter(arr) {
  let resultArr = arr.filter(elem => elem > 0).filter(elem => {return !(elem % 3)}).map(elem => elem * 10);
  return resultArr; // array
}

advancedFilter([1, 6, 3, 20, 30, -1, -2, -3])