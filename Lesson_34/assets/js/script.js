function setOrder(){
	let div = document.createElement('div');
	div.className = 'order mb';
	let pCountOrder = document.createElement('p');
	pCountOrder.innerHTML = `<strong>Замовлення №${count}</strong>`;
	div.append(pCountOrder);
	result.append(div);
	for(let el of inputs){
		if(el.value === '') {
			alert( 'Введіть всі данні!' );
			div.remove();
			inputs.forEach(e => {
				if(e.id !== 'btn') e.value = '';
			});
			return;
		}
		else{
			if(el.id !== 'btn'){
				let p = document.createElement("p");
				p.innerText = `${el.placeholder}: ${el.value}`;
				div.append(p);
				el.value = '';
			}
		}
	}
	count++;
}


let inputs = document.querySelectorAll("input");
let result = document.querySelector('#result');
let count = 1;
document.querySelector('#btn')
		.addEventListener('click', setOrder);