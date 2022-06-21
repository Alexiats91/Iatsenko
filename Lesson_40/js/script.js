const newPrices =  document.querySelectorAll('.product-carousel-price  ins');
const oldPrices =  document.querySelectorAll('.product-carousel-price  del');


const sendRequest = (method, url, data) => {
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: data ? { 'Content-Type': 'application/json' } : {}
	}).then(response => response.json());
};

sendRequest('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
	.then(currency => {
			for(let i = 0; i < newPrices.length; i++){
				let priceUA = Number(newPrices[i].innerHTML.slice(1)) * Number(currency[0].sale);
				newPrices[i].innerText = `${priceUA.toFixed(2)} грн`;
			}
			for(let i = 0; i < oldPrices.length; i++){
				let priceUA = Number(oldPrices[i].innerHTML.slice(1)) * Number(currency[0].sale);
				oldPrices[i].innerText = `${priceUA.toFixed(2)} грн`;
			}
	})