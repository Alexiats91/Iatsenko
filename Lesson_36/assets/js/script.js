function clock (){
	let date = new Date();
	let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	let weekDay = date.getDay();
	let month = date.getMonth();
	let day = date.getDate()
	const weekdayArr = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
	const monthArr = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
	document.querySelector('#hours').innerText = hour;
	document.querySelector('#minutes').innerText = minute;
	document.querySelector('#seconds').innerText = second;
	document.querySelector('#weekDays').innerText = weekdayArr[weekDay];
	document.querySelector('#monthsDays').innerText = `${monthArr[month]} ${day}`;
}
setInterval(clock, 1000);

function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor( Math.random() * (max - min + 1) ) + min;
}
function createAnimElem(){
	let div = document.querySelector(".anim");
	let span;
	for(let i = 0; i < 30; i++){
		span = document.createElement("span");
		div.append(span);
		span.style.top = `${randomInt(-90, 90)}px`;
		span.style.right = `${randomInt(-90, 90)}px`;
		span.style.opacity = `${Math.random()}`;
	}
}
createAnimElem();


