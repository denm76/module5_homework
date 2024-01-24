// задание восемь
let cars = new Map([
  ["AUDI","Quattro"],
  ["BMW", "X7"],
  ["LADA", "Granta"]
]);

for(let name of cars.keys()){
  console.log(`Марка - ${name}, модель - ${cars.get(name)}`)
}