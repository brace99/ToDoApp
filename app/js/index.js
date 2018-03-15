var daytasks = document.querySelector('.daytasks')
var button = document.querySelector('.button-bottom-check');

button.addEventListener('click', function(){
	var value = document.querySelector('.todo-input').value;
	if (value) addItemTodo(value);
	else alert ('Please, write something first')
});

function addItemTodo(element) {
   var task = document.createElement ('div');
   task.classList.add('task')

   var number = document.createElement ('p')
   number.classList.add('number');

   var edit = document.createElement('div');
   edit.classList.add('edit');

   var text = document.createElement('div');
   text.classList.add('text');
   text.appendChild(task);

   var change = document.createElement('span');
   change.classList.add('change');

   var remove = document.createElement ('span');
   remove.classList.add('remove');

   text.innerHTML = 'todo-input';
   remove.appendChild(edit);
   change.appendChild(edit);
   edit.appendChild(task);
   text.appendChild(task);
   number.appendChild(task);
   task.appendChild(daytasks);
}