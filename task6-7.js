//задание шесть
let arr = [2, 2, 2, 2];
for (let i = 1; i < arr.length; i++) {
  if (arr[0] != arr[i]) {
    console.log("В массиве неодинаковые элементы!");
    i = arr.length;
  }
  else if ((arr[0] == arr[i]) && (i == arr.length - 1)) {
    console.log("Все элементы одинаковые!");
  }
}

//задание семь
let array = [3, 19, 24, true, NaN, 0, { d: 23 }, 37, 42, 2];
let countEven = 0;
let countOdd = 0;
let zeroCount = 0;
array.forEach(function (item, index, arr) {
  if (typeof(item) == 'number' && !isNaN(item)) {
    if (item == 0) {
      zeroCount++;
    } else if (item % 2 == 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
});
console.log(`Чётных чисел: ${countEven}\n Нечетных чисел: ${countOdd}\n Нулей: ${zeroCount}`);