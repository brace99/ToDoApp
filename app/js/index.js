var input = document.querySelector('.todo-input');
var button = document.querySelector('.button-bottom-check');

button.addEventListener('click', function(e){
	console.log(input.value);
});