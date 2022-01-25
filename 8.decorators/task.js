function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  //console.log(cache);
  return function wrapper(...args) {

    const hash = args.join(',');
    //console.log(hash);

    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1 ) { // если элемент не найден
      //console.log(cache[hash]);
      console.log("Из кэша: " + cache[hash]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[hash];
    } else {
      let result = func(...args); // в кэше результата нет - придётся считать
      cache[hash] = result;
      //console.log(hash);
      cache.push({hash, result}); // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      // console.log(cache);
      // console.log(cache.length);
      return "Вычисляем: " + result;
    }
  }
}

const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
//upgradedAddThree(1, 2, 3);


const sendSignal = () => console.log("Сигнал отправлен");
function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, ms);
  };
}

//const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
setTimeout(upgradedSendSignal, 4500);


function debounceDecorator2(func, ms) {
  // Ваш код
  let timeout;
  ;
  function wrapper(count) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func();
    }, ms);
    wrapper.history.push(count);
  };
  wrapper.history = [];
  return wrapper;
}


//console.log(`запрос был выполнен ${upgradedSendSignal.history.length} раз`)