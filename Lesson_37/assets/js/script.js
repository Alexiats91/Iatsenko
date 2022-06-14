let form = document.querySelector('form');
form.addEventListener("submit", checkTelPattern);
form.addEventListener("submit", checkEmailPattern);
function checkTelPattern(event){
	let telInput = document.querySelector('#tel');
	let validInput = document.querySelector('#validTelInput');
	let userTel = telInput.value;
	let telPattern = /\+\d{2}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/g;
	let valid = telPattern.test(userTel);

	if(!valid){
		event.preventDefault();
		validInput.innerHTML = ' Некоректний номер';
		validInput.style.color = 'red';
		telInput.style.border = '1px solid red';
	}
}
function checkEmailPattern(event){
	let emailInput = document.querySelector('#email');
	let validInput = document.querySelector('#validEmailInput');
	let userEmail = emailInput.value;
	let emailPattern = /^[a-z0-9]\w*@\w*\.\w{2,6}$/i;
	let valid = emailPattern.test(userEmail);

	if(!valid){
		event.preventDefault();
		validInput.innerHTML = 'Некоректний Email';
		validInput.style.color = 'red';
		emailInput.style.border = '1px solid red';
	}
}