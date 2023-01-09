import Todo from '../todos/models/todo.model'

const Filters = Object.freeze({
  All: Symbol('all'),
  Completed: Symbol('completed'),
  Pending: Symbol('pending'),
})

const state = {
  todos: [
    new Todo('Gema del espacio'),
    new Todo('Gema de la mente'),
    new Todo('Gema de la realidad'),
    new Todo('Gema del poder'),
    new Todo('Gema del tiempo'),
    new Todo('Gema del alma'),
  ],
  filter: Filters.All,
}

function initStore() {
  throw new Error('Not implemented')
}

function loadStore() {
  throw new Error('Not implemented')
}

function getTodos(filter) {
  switch (filter) {
    case Filters.All:
      return [...state.todos]
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done)
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done)
    default:
      throw new Error('Invalid filter')
  }
}

function addTodo(todo) {
  if (!(todo instanceof Todo)) throw new Error('Invalid todo')
  state.todos.push(todo)
}

function toggleTodo(todoId) {
  const todo = state.todos.find((todo) => todo.id === todoId)
  todo.done = !todo.done

  // Menos eficiente:
  // state.todos = state.todos.map((todo) => {
  //   if (todo.id === todoId) todo.done = !todo.done
  //   return todo
  // })
}

function deleteTodo(todoId) {
  state.todos = state.todos.filter((todo) => todo.id !== todoId)
}

function deleteCompleted() {
  state.todos = state.todos.filter((todo) => !todo.done)
}

function setSelectedFilter(newFilter) {
  if (!Object.values(Filters).includes(newFilter)) {
    throw new Error('Invalid filter')
  }
  
  state.filter = newFilter
}

function getSelectedFilter() {
  return state.filter
}

export default {
  Filters,
  initStore,
  loadStore,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setSelectedFilter,
  getSelectedFilter,
}
