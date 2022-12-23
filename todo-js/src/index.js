import './index.css';

import { Todo, TodoList } from './js/classes';
import { crearTodoHtml } from './js/components';



export const todoList = new TodoList();
todoList.todos.forEach(crearTodoHtml);
