let employees = [
	{
		id: 1,
		fName: 'Олег',
		lName: 'Смірнов',
		age: 18,
		position: 'Менеджер з реклами',
		salaryPerMonth: [ 324, 723, 921, 874, 900, 634, 798, 900, 901, 975, 1020, 1200 ]
	},
	{
		id: 2,
		fName: 'Ольга',
		lName: 'Іванова',
		age: 25,
		position: 'Адміністратор',
		salaryPerMonth: [ 564, 632, 577, 600, 750, 710, 701, 765, 800, 810, 800, 850 ]
	},
	{
		id: 3,
		fName: 'Максим',
		lName: 'Остапенко',
		age: 23,
		position: 'web-розробник',
		salaryPerMonth: [ 2314, 2321, 2333, 2431, 2400, 2534, 2200, 2132, 2278, 2342, 2478, 2500 ]
	},
	{
		id: 4,
		fName: 'Роман',
		lName: 'Андрієнко',
		age: 43,
		position: 'Генеральний директор',
		salaryPerMonth: [ 3120, 3452, 3400, 3467, 3764, 3809, 3800, 3900, 3967, 4000, 4345, 4534 ]
	},
	{
		id: 5,
		fName: 'Карина',
		lName: 'Шевченко',
		age: 27,
		position: 'PM-менеджер',
		salaryPerMonth: [ 1233, 1222, 1256, 1100, 1700, 1300, 1546, 1645, 1608, 1700, 1700, 1750 ]
	}
];

let user = document.querySelector("#personal-list");

let filteredArray = employees.filter(e => {
	if(Number(e.age) >= 20 && Number(e.age) <= 30) {
		return e;
	}
});

let employeesPerYear = filteredArray.map(e =>{
	return e.salaryPerMonth.reduce((sum, e) => {
			return sum + e;
		}, 0);
});
filteredArray.forEach((el ,index) => {
	user.innerHTML += `<ul>
	<li><strong>id:</strong> ${el.id}</li>
	<li><strong>Ім'я:</strong> ${el.fName}</li>
	<li><strong>Прізвище:</strong> ${el.lName}</li>
	<li><strong>Вік:</strong> ${el.age}</li>
	<li><strong>Посада:</strong> ${el.position}</li>
	<li><strong>ЗП:</strong> ${employeesPerYear[index]}</li>
	 ${employeesPerYear[index] < 10000 ?
	   '<li><strong>Надбавка:</strong> +5% ($' + (employeesPerYear[index]*0.05).toFixed(2)+')</li>' : ''}
</ul>`
})
