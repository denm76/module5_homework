let someNumber = +prompt("Введите число");
let typeOfString = typeof (someNumber);
if (typeOfString !== "number" || isNaN(someNumber)) {
  alert("Упс, кажется, вы ошиблись");
}
else {
  if (someNumber % 2 == 0) {
    alert("Число четное!")
  } else {
    alert("Число нечетное!")
  }
}

//задание два
let variable = "string";

let typeOfVariable = typeof (variable);
switch (typeOfVariable) {
  case 'number':
    console.log("Число!");
    break;
  case 'string':
    console.log("Строка!");
    break;
  case 'boolean':
    console.log('Логический!');
    break;
  default:
    console.log("Тип не определен!");
}