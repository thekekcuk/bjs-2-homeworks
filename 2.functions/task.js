// Задание 1
let getArrayParams = (...arr) => {
  let min,max,sum,avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    if(arr[i] < min) min = arr[i];
    if(arr[i] > max) max = arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);
  return { min:min, max:max, avg:avg };
}
let result = getArrayParams(1,4,88,2,1,-21,-3,-40,0);
console.log (result);



// Задание 2
function worker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  // Ваш код
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
    let result = func(...arrOfArr[i])
    if(result > max){
      max = result;
    }

  }
  // Ваш кода
  // for ...

  return max;
}
let res = makeWork([[1,25,3],[4,50,6],[7,8,9]],worker);
console.log(res);




// Задание 3
function worker2(...arr) {
  // Ваш код
  let min,max,sum;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    if(arr[i] < min) min = arr[i];
    if(arr[i] > max) max = arr[i];
  }
  sum = max - min;
  return sum;
}



