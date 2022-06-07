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
	document.querySelector('#weekdays').innerText = weekdayArr[weekDay];
	document.querySelector('#monthsDays').innerText = `${monthArr[month]} ${day}`;
}
setInterval(clock, 1000);
