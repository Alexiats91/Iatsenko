let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("-----for-----");
for(let i = 0; i < array.length; i++) console.log(array[i]);
console.log("");

console.log("-----for of-----");
for(let el of array	) console.log(el);
console.log("");

console.log("-----for in-----");
for(let el in array) console.log(array[el]);
console.log("");

console.log("-----while-----");
let j = 0;
while(j < array.length) {
	console.log(array[j++]);
}
console.log("");

console.log("-----do while-----");
let k = 0;
do{
	console.log(array[k++]);
} while(k < array.length);
console.log("");

console.log("-----.forEach-----");
array.forEach(el  => console.log(el));
console.log("");

console.log("-----.map-----");
array.map(elem => console.log(elem));
console.log("");

console.log("-----Парні та непарні-----");
console.log( 'Парні:' );
for(let el of array) {
	if( el % 2 === 0 ) console.log( el );
}
console.log( 'Непарні:' );
for(let el of array) {
	if(el % 2 !== 0) console.log( el );
}
console.log("");

console.log("-----Сума чисел масиву-----");
let sum = 0;
array.forEach(el  => sum += el);
console.log( `Сума елементів масиву: ${sum}.` );
