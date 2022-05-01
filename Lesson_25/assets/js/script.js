function calcRectangleArea(sideAB, sideBC) {
	sideAB = +prompt( "Введите первую сторону прямоугольника", 0 );
	sideBC = +prompt( "Введите вторую сторону прямоугольника", 0 );
	let div = document.querySelector('.result');
	if( isNaN( sideAB ) || isNaN( sideBC ) ) {
		div.innerHTML += `<p>Вы ввели некорректное значение.</p>`;
	} else if( sideAB < 0 || sideBC < 0 ) {
		div.innerHTML += `<p>Вы ввели отрицательное значение или ноль.</p>`;
	} else if( sideAB === 0 || sideBC === 0 ) {
		div.innerHTML += `<p>Вы не ввели значение.</p>`;
	}else {
		let S = sideAB * sideBC;
		div.innerHTML += `<p>Площадь прямоугольника со сторонами ${sideAB} см и ${sideBC} см равна <b>${S} кв.см.</b></p>`;
	}
}

function calcCircleArea(r){
	r = +prompt("Введите радиус круга", 0);
	let div = document.querySelector('.result');
	if(isNaN(r)){
		div.innerHTML += `<p>Вы ввели некорректное значение.</p>`;
	} else if(r < 0) {
		div.innerHTML += `<p>Вы ввели отрицательное значение или ноль.</p>`;
	} else if(r === 0) {
		div.innerHTML += `<p>Вы не ввели значение.</p>`;
	}else {
		let S = Math.PI*Math.pow(r, 2);
		let roundedS = S.toFixed(2);
		div.innerHTML += `<p>Площадь круга с радиусом ${r}см равна <b>${roundedS} кв.см.</b></p>`;
	}
}

function calcPowNumber(a, n){
	a = +prompt("Введите число, которое нужно возвести в степень", 0);
	n = +prompt("Введите степень числа", 0);
	let div = document.querySelector('.result');
	if(isNaN(a) || isNaN(n)){
		div.innerHTML += `<p>Вы ввели некорректное значение.</p>`;
	} else if(a < 0 || n < 0) {
		div.innerHTML += `<p>Вы ввели отрицательное значение или ноль.</p>`;
	} else if(a === 0 || n === 0) {
		div.innerHTML += `<p>Вы не ввели значение.</p>`;
	}else {
		let pow = Math.pow(a, n);
		div.innerHTML += `<p>Число ${a} в степени ${n} равно <b>${pow}</b>.</p>`;
	}
}

let button1 = document.querySelector('#ra');
button1.addEventListener("click", calcRectangleArea);

let button2 = document.querySelector('#ca');
button2.addEventListener("click", calcCircleArea);

let button3 = document.querySelector('#pn');
button3.addEventListener("click", calcPowNumber);

//****************************************************

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
