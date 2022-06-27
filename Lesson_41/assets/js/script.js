/*
*	Task1
*/
const saveBTN = document.querySelector('#saveBTN');
const clearBTN = document.querySelector('#clearBTN');
const input = document.querySelector('input');
const showBTN = document.querySelector('#showResult');
saveBTN?.addEventListener('click', saveInfo);
clearBTN?.addEventListener('click', clearInfo);
input?.addEventListener('input', checkInput);
showBTN?.addEventListener('click', showLocalStorage);

function saveInfo(){
	if(checkInput()){
		localStorage.setItem('inputValue', `${input.value}`);
	}
}
function clearInfo(){
	localStorage.clear()
}
function checkInput(){
	let valid = false;
	const inputValue = input.value;
	const label = document.querySelector('label')
	if(inputValue === '') {
		input.classList.add('input-empty');
		label.classList.add('empty');
	}
	else{
		input.classList.remove('input-empty');
		label.classList.remove('empty');
		valid = true;
	}
	return valid;
}
function showLocalStorage(){
	let result = document.querySelector('.result');
	if(localStorage.getItem('inputValue') !== null){
		result.innerHTML = `Збережене значення:<br> <b>${localStorage.getItem('inputValue')}</b>`;
	}
	else{
		result.innerHTML = 'LocalStorage порожній';
	}

}

/*
*	Task2
*/
const navLinks = document.querySelectorAll('.nav-item a');
for( const link of navLinks ){
	const linkHref = link.getAttribute('href');
	if(location.pathname === linkHref) {
		link.closest('li').classList.add('nav-item-active');
	}
}

/*
*	Task3
*/
const myURL = new URL('https://learn.javascript.ru/url');
myURL.searchParams.set('name', 'user');
myURL.searchParams.set('age', '20');
myURL.searchParams.set('nick', 'hero');
myURL.searchParams.delete('age');
console.log(myURL.searchParams.get('name'));
console.log(myURL.searchParams.get('nick'));

/*
*	Task4
*/
jq = jQuery.noConflict();
jq( function ($) {
	'use strict';

	$('.tab-list a').on('click', function(e){
		e.preventDefault();
		$('.tab-list a').each(function(){
			if($(this.parentElement).hasClass('tab-item-active')){
				$(this.parentElement).removeClass('tab-item-active');
			}
			$(e.target.parentElement).addClass('tab-item-active');
		})
		$('.wrap-tabs .tab-content').each(function(){
			$(this).removeClass('tab-content-active');
			if($(this).hasClass($(e.target).attr('class'))){
				$(this).addClass('tab-content-active');
			}
		})

	})
})