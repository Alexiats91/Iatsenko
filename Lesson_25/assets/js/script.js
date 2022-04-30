function calcRectangleArea(sideAB, sideBC) {
	sideAB = +prompt( "Введите первую сторону прямоугольника", 0 );
	sideBC = +prompt( "Введите вторую сторону прямоугольника", 0 );
	if( isNaN( sideAB ) || isNaN( sideBC ) ) {
		console.error( "Вы ввели некорректное значение." );
	} else if( sideAB < 0 || sideBC < 0 ) {
		console.error( "Вы ввели отрицательное значение или ноль." );
	} else if( sideAB === 0 || sideBC === 0 ) {
		console.error( "Вы не ввели значение." );
	}else {
		let S = sideAB * sideBC;
		console.log( `Площадь прямоугольника со сторонами ${sideAB}см и ${sideBC}см равна ${S}кв.см.` );
	}
}

function calcCircleArea(r){
	r = +prompt("Введите радиус круга", 0);
	if(isNaN(r)){
		console.error( "Вы ввели некорректное значение." );
	} else if(r < 0) {
		console.error( "Вы ввели отрицательное значение или ноль." );
	} else if(r === 0) {
		console.error( "Вы не ввели значение." );
	}else {
		let S = Math.PI*Math.pow(r, 2);
		let roundedS = S.toFixed(2);
		console.log( `Площадь круга с радиусом ${r}см равна ${roundedS}кв.см.` );
	}
}

function calcPowNumber(a, n){
	a = +prompt("Введите число, которое нужно возвести в степень", 0);
	n = +prompt("Введите степень числа", 0);
	if(isNaN(a) || isNaN(n)){
		console.error( "Вы ввели некорректное значение." );
	} else if(a < 0 || n < 0) {
		console.error( "Вы ввели отрицательное значение или ноль." );
	} else if(a === 0 || n === 0) {
		console.error( "Вы не ввели значение." );
	}else {
		let pow = Math.pow(a, n);
		console.log( `Число ${a} в степени ${n} равно ${pow}.` );
	}
}

console.log(`--------Function--------`);

calcRectangleArea();
calcCircleArea();
calcPowNumber();

console.log(``);
console.log(`--------Variables--------`);

let sideAB = 7;
let sideBC = 3;
let rectangleArea = sideAB*sideBC;
console.log(`Площадь прямоугольника со сторонами ${sideAB}см и ${sideBC}см: ${rectangleArea}см.`);

let r = 3;
const Pi = 3.14;
let circleArea = Pi*r*r;
let rounderCircleArea = circleArea.toFixed(2);
console.log(`Площадь круга с радиусом ${r}см: ${rounderCircleArea}кв.см.`);

let a = 2;
let n = 5;
let pow = Math.pow(a, n);
console.log(`Число ${a} в степени ${n}: ${pow}.`);
