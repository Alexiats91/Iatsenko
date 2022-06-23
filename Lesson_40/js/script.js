const newPrices =  document.querySelectorAll('.product-carousel-price  ins');
const oldPrices =  document.querySelectorAll('.product-carousel-price  del');
const currentItem = document.querySelector('.dropdown-menu'); //випадаюче меню для вибору валюти
const selectedCurrency = document.querySelector('.value'); //сюди записуємо обрану валюту

const fixedNewNativePrices = [26700.00, 25632.00, 24564.00, 14240.00, 28124.00, 16376.00,
				19936.00, 21360.00, 48416.00, 17088.00, 26344.00, 21716.00]; //нові ціни на кожну карточку товару
const fixedOldNativePrices = [35564.40, 35564.40, 35564.40, 35564.40, 35564.40, 35564.40,
				   35564.40, 35564.40, 35564.40, 35564.40, 35564.40, 35564.40];//старі ціни на кожну карточку товару

//вішаємо подію "клік" на випадаюче меню валют
currentItem.addEventListener('click', changeSelectedCurr);
//функція перевіряє, якщо клік був зроблений по елементу <a></a>,
// тоді текстове значення клікнутого елементу присвоюємо для selectedCurrency
function changeSelectedCurr(e){
	if (e.target.nodeName === 'A'){
		selectedCurrency.innerText = e.target.innerText;
	}
}

let currElem = '';
let currSymbol = '';
//Функція розраховуе ціни по курсу валют.
//currency - об'єкт з валютами
//pricesOutArr - масив, куди будуть виводитись значення,
function calcForeignCurr(currency, pricesOutArr, fixedPricesArr){
	for(let i = 0; i < pricesOutArr.length; i++) {
		let price = Number( fixedPricesArr[i]) / Number( currency[currElem].sale );
		pricesOutArr[i].innerText = `${price.toFixed( 2 )}`;
		pricesOutArr[i].nextElementSibling.innerText = currSymbol;
	}
}

//Функція,яка поветрає ціни в гривнях.
// pricesOutArr - масив, куди будуть виводитись значення,
// fixedPricesArr - фіксовані ціни
function showNativeCurr(pricesOutArr, fixedPricesArr){
	for(let i = 0; i < pricesOutArr.length; i++) {
		pricesOutArr[i].innerText = fixedPricesArr[i].toFixed(2);
		pricesOutArr[i].nextElementSibling.innerText = currSymbol;
	}
}

//Функція для зміни нової та старої ціни в обрану валюту
function changeCurrency(currency){
	if(selectedCurrency.innerText === 'UAH'){
		currSymbol = '₴';
		showNativeCurr(newPrices, fixedNewNativePrices);
		showNativeCurr(oldPrices, fixedOldNativePrices);
	}else if(selectedCurrency.innerText === 'USD'){
		currElem = 0;
		currSymbol = '$';
		calcForeignCurr(currency, newPrices, fixedNewNativePrices);
		calcForeignCurr(currency, oldPrices, fixedOldNativePrices);
	}else if(selectedCurrency.innerText === 'EUR'){
		currElem = 1;
		currSymbol = '€';
		calcForeignCurr(currency, newPrices, fixedNewNativePrices);
		calcForeignCurr(currency, oldPrices, fixedOldNativePrices);
	}
}

const sendRequest = (method, url, data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: data ? { 'Content-Type': 'application/json' } : {}
	}).then(response => response.json());
};

currentItem.addEventListener('click', function(){  //слухаємо подію клік по вибраній валюті
	sendRequest('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
		.then(currency => {
			changeCurrency(currency);
		})
})