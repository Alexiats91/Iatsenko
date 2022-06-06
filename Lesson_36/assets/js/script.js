function clock (){
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	let weekDay = date.getDay();
	let month = date.getMonth();
	let day = date.getDate()
	const weekdayArr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	const monthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	document.querySelector('#hours').innerText = '08';
	document.querySelector('#minutes').innerText = 30;
	document.querySelector('#seconds').innerText = second;
	document.querySelector('#weekdays').innerText = weekdayArr[weekDay];
	document.querySelector('#monthsDays').innerText = `${monthArr[month]} ${day}`;
}
setInterval(clock, 1000);
