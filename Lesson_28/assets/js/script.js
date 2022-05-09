let names1 = ["Павел", "Наталья", "Олег", "Евгений", "Станислав"];
let names2 = Array("Павел", "Наталья", "Олег", "Евгений", "Станислав");
let names3 = new Array("Павел", "Наталья", "Олег", "Евгений", "Станислав");
console.log("----Names1----");
console.log(names1[0]);
console.log(names1[1]);
console.log(names1[2]);
console.log(names1[3]);
console.log(names1[4]);
console.log("");
console.log('----"For" Names1----');
for(let i = 0; i < names1.length; i++){
	console.log(names1[i] + " => " + "[" + i + "]");
}
console.log("");
let cars = ["Tesla", "Volkswagen", "Toyota", "BMW", "Mazda"];
let [car1, car2, ...spread] = cars;
console.log(cars);
console.log(car1);
console.log(car2);
console.log(spread);