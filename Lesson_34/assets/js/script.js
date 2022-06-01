function setOrder(){
	let inputs = document.querySelectorAll("input");
	let result = document.querySelector('#result');
	count++;
	let div = document.createElement('div');
	div.className = 'order mb';
	let pCountOrder = document.createElement('p')
	pCountOrder.innerText = `Замовлення №${count}`;
	div.append(pCountOrder);
	result.append(div);
	for(let el of inputs){
		if(el.id !== 'btn'){
			let p = document.createElement("p");
			p.innerText = `${el.placeholder}: ${el.value}`;
			div.append(p);
			el.value = '';
		}
	}
}

let count = 0;
document.querySelector('#btn')
		.addEventListener('click', setOrder);