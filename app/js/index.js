var daytasks = document.querySelector('.daytasks')
var button = document.querySelector('.button-bottom-check');
var taskText = document.querySelector('.todo-input');
var tasks = [];

if (JSON.parse(localStorage.getItem('tasks'))){
	tasks = JSON.parse(localStorage.getItem('tasks'));
	// console.log(tasks)
	for (let i = 0; i < tasks.length; i++){
		addItemTodo(tasks[i].value, tasks[i].time, i + 1);
	}
}

document.querySelector('.button-upload').addEventListener('click', function(e){
	if (window.localStorage){
		localStorage.clear();
	}
});

function Task(value, time){
	this.value = value;
	this.time = time;
}

button.addEventListener('click', function(){
	var value = taskText.value;
	if (value.trim()){
		addItemTodo(value);
		var time = new Date().getHours() + ':' + new Date().getMinutes();
		var currentTask = new Task(value, time);
		tasks.push(currentTask)
		localStorage.setItem('tasks', JSON.stringify(tasks));
		taskText.value = '';
		console.log(JSON.parse(localStorage.getItem('tasks')))
	} else {
		alert ('Please, write something first')
	}
});

document.addEventListener('keydown', function(e){
	// console.log(e)
	if (e.key == 'Enter'){
		var value = taskText.value;
		if (value.trim()){
			addItemTodo(value);
			var time = new Date().getHours() + ':' + new Date().getMinutes();
			var currentTask = new Task(value, time);
			tasks.push(currentTask)
			localStorage.setItem('tasks', JSON.stringify(tasks));
			taskText.value = '';
			console.log(JSON.parse(localStorage.getItem('tasks')))
		} else {
			alert ('Please, write something first')
		}
	}
});

function addItemTodo(value, time, i) {
	var id = i || tasks.length + 1;
	var time = time || new Date().getHours() + ':' + new Date().getMinutes();
   var task = document.createElement ('div');
   task.setAttribute('data-id', id);
   task.classList.add('task')

   var number = document.createElement ('p')
   number.classList.add('number');
   number.innerHTML = new Date().getDay();

   var edit = document.createElement('div');
   edit.classList.add('edit');

   var text = document.createElement('div');
   text.classList.add('text');
   var h3 = document.createElement('h3');
   var date = document.createElement('p');

   h3.innerHTML = value;
   date.innerHTML = time;
   text.appendChild(h3);
   text.appendChild(date);
   // text.appendChild(task);

   var change = document.createElement('span');
   change.classList.add('change');
   change.addEventListener('click', function(e){
   		var parent = e.target.parentNode.parentNode.parentNode;
   		var currentId = parent.getAttribute('data-id');
   		var newText = prompt('Edit task');

   		console.log(newText);
   		if (newText != null){
	   		if (newText.trim()){
	   			var childText = parent.children[1].firstChild;
		   		childText.innerHTML = newText.trim();
		   		tasks[currentId - 1].value = newText.trim();
		   		localStorage.clear();
		   		localStorage.setItem('tasks', JSON.stringify(tasks));
		   		console.log(tasks[currentId - 1])
	   		} else {
	   			alert ('Please, write something first')
	   		}
	   	}

   });
   change.innerHTML = '<i class="far fa-edit">';

   var remove = document.createElement ('span');
   remove.classList.add('remove');

   remove.addEventListener('click', function(e){
   		// console.log(e.target.parentNode.parentNode.parentNode);
   		var currentId = e.target.parentNode.parentNode.parentNode.getAttribute('data-id');
   		tasks.splice(currentId - 1, 1);
   		console.log(tasks)
   		localStorage.clear();
   		localStorage.setItem('tasks', JSON.stringify(tasks));

   		e.target.parentNode.parentNode.parentNode.remove()
   });
   remove.innerHTML = '<i class="fas fa-times">';

   edit.appendChild(change);
   edit.appendChild(remove);

   task.appendChild(number);
   task.appendChild(text);
   task.appendChild(edit);

   daytasks.appendChild(task);

   console.log(task)
}

// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(json => {
//   	console.log(json.slice(0, 10))
//   	json.slice(0, 1000).forEach(item => {
//   		addItemTodo('<img src="' + item.thumbnailUrl + '"> ');
//   	})
//   })