// Перше завдання
let func = (question) => {
	let answer = prompt(question);
	alert(`Ваша відповідь: ${answer}`)
}
func('Як вас звати?');
func('Скільки вам років?');
func('Ким ви працюєте?');

// Друге завдання
let person = {
	name: 'Олег',
	age: 26,
	sayHello() {console.log(`Доброго дня, ${this.name}. Вам ${this.age} років`);}
}
person.sayHello();

// третє завдання
let askList = [
	'Як вас звати?',
	'Скільки вам років?',
	'Ви одружені/заміжні?',
	'Ким ви працюєте?',
	'Яка у вас ЗП?',
	'Де ви були за кордоном останній раз?',
];
let answers = {
	name: null,
	age: null,
	family: null,
	job: null,
	salary: null,
	abroad: null,
};
function pushAnswersToObj(questionArr, answersObj) {
	let answersArray = [];
	for (let i = 0; i < questionArr.length; i++){
		answersArray.push(prompt(questionArr[i]));
	}
	let index = 0;
	for (let key in answersObj){
		answersObj[key] = answersArray[index];
		index++;
	}
	return console.log(answersObj);
}
pushAnswersToObj(askList, answers);