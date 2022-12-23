import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    this.load();
  }


  new(todo) {
    this.todos.push(todo);
    this.save();
  }


  delete(id) {
    this.todos = this.todos.filter(todo => todo.id != id);
    this.save();
  }


  toggle(id) {
    let i = 0;
    while ((i <= this.todos.length) && (this.todos[i].id != id)) i++; 
    this.todos[i].completado = !this.todos[i].completado;

    this.save();
  }

  
  deleteCompleted() {
    this.todos = this.todos.filter(todo => !todo.completado);
    this.save();
  }


  save() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }


  load() {
    this.todos = (localStorage.getItem('todo')) 
    ? JSON.parse(localStorage.getItem('todo')) 
    : [];

    this.todos = this.todos.map(Todo.fromJSON);
  }
}
