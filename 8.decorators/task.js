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


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
