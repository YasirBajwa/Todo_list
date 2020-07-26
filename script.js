var addList = document.getElementById('list');

function addTodo() {
  // create li
  var todo_input = document.getElementById('todo-input');
  var li = document.createElement('li');
  var textNode = document.createTextNode(todo_input.value);
  li.setAttribute('class', 'li');
  li.appendChild(textNode);

  // create update button
  var updateBtn = document.createElement('button');
  var updateText = document.createTextNode('UPDATE');

  updateBtn.setAttribute('class', 'btn-success btn1');
  updateBtn.setAttribute('onclick', 'updateItem(this)');
  updateBtn.appendChild(updateText);

  // create delete button

  var deleteBtn = document.createElement('button');
  var deleteText = document.createTextNode('DELETE');
  deleteBtn.setAttribute('class', ' btn-danger btn1');
  deleteBtn.setAttribute('onclick', 'deleteItem(this)');

  deleteBtn.appendChild(deleteText);

  if (todo_input.value === '') {
    alert('Please Enter the Task');
    return false;
  }

  li.appendChild(updateBtn);
  li.appendChild(deleteBtn);

  addList.appendChild(li);

  todo_input.value = '';
}

function deleteItem(e) {
  e.parentNode.remove();
}

function deleteAll() {
  addList.innerHTML = '';
}

function updateItem(e) {

//   var val1 = e.parentNode.firstChild;
//     var updateVal = prompt('Enter the Update Value', val1);

//   e.parentNode.firstChild.nodeValue = updateVal;

//   var inputVal = document.createElement('input');
//   inputVal.setAttribute('class','todo-input');
//   inputVal.setAttribute('type','text');

// var textNode = document.createTextNode(val1.nodeValue);
// inputVal.appendChild(textNode);
// console.log(inputVal.nodeValue);


//  val1.parentNode.replaceChild(inputVal,val1);


//   val1.replaceChild(inputVal);
//   e.parentNode.firstChild = inputVal;
//   console.log(inputVal);
//   val1.appendChild(val1);


//   inputVal.appendChild(val1);

//   e.parentNode.appendChild(inputVal);

   var val1 = e.parentNode.firstChild;

  var updateVal = prompt('Enter the Update Value', val1.nodeValue);
  if(updateVal === ''){
      alert('please enter the update value');
      return false;
  }

  e.parentNode.firstChild.nodeValue = updateVal;

//   console.log(e.parentNode.firstChild.nodeValue);
}
