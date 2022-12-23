import { Todo, TodoList } from "./classes";
import { todoList } from '../index'

const divTodoList = document.querySelector('.todo-list');
const input       = document.querySelector('.new-todo');
const btnBorrar   = document.querySelector('.clear-completed');
const filters     = document.querySelector('.filters');


export const crearTodoHtml = (todo) => {
  const htmlTodo = `
    <li 
      class="${ (todo.completado) ? 'completed' : '' }" 
      data-id="${ todo.id }"
    >
      <div class="view">
        <input 
          class="toggle" 
          type="checkbox" 
          ${ (todo.completado) ? 'checked' : '' }
        >
        <label>${ todo.tarea }</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
  `;

  const div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
}


//* EVENTOS
input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && input.value.length > 0) {
    const newTodo = new Todo(input.value);
    todoList.new(newTodo);
    crearTodoHtml(newTodo);

    input.value = '';

    console.log(todoList.todos);
  }
});

divTodoList.addEventListener('click', (e) => {
  const nombreElemento = e.target.localName;
  const todoElemento   = e.target.parentElement.parentElement;
  const todoId         = todoElemento.getAttribute('data-id');
  

  if (nombreElemento === 'input') {
    todoList.toggle(todoId);
    todoElemento.classList.toggle('completed');
  } else if (nombreElemento === 'button') {
    todoList.delete(todoId);
    todoElemento.remove();
  }
});

btnBorrar.addEventListener('click', () => {
  todoList.deleteCompleted();

  for (let i = divTodoList.children.length - 1; i >= 0; i--) {
    const el = divTodoList.children[i];

    if (el.classList.contains('completed')) {
      el.remove();
    }
  }
});


filters.addEventListener('click', (e) => {
  const filter = e.target.text;
  if (filter) {
    for (const element of divTodoList.children) {
      const isCompleted = element.classList.contains('completed');

      if ( 
        ( isCompleted && (filter === 'Pendientes')) ||
        (!isCompleted && (filter === 'Completados'))
      )
        element.classList.add('hidden');
      else
        element.classList.remove('hidden');
    }
  }

  filters.querySelector('.selected').classList.remove('selected');
  e.target.classList.add('selected');
});
