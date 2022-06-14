let form = document.querySelector('form');
form.addEventListener("submit", setInvalidTelStyles);
form.addEventListener("submit", setInvalidEmailStyles);

function validation(input, regExp){
	let userValue = input.value;
	return regExp.test( userValue );
}

function setInvalidTelStyles(event){
	let invalidInput = document.querySelector('#invalidTelInput');
	if(!validation(telInput, telPattern)){
		event.preventDefault();
		invalidInput.innerHTML = ' Некоректний номер';
		invalidInput.style.color = 'red';
		telInput.style.boxShadow = '0px 0px 20px 0px rgba(222,13,13,0.75)';
	}
}

function setInvalidEmailStyles(event){
	let invalidInput = document.querySelector('#invalidEmailInput');
	if(!validation(emailInput, emailPattern)){
		event.preventDefault();
		invalidInput.innerHTML = 'Некоректний Email';
		invalidInput.style.color = 'red';
		emailInput.style.boxShadow = '0px 0px 20px 0px rgba(222,13,13,0.75)';
	}
}

let telInput = document.querySelector('#tel');
let emailInput = document.querySelector('#email');
let telPattern = /\+\d{2}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
let emailPattern = /^[a-z0-9]\w*@\w*\.\w{2,6}$/i;