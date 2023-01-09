import Todo from '../todos/models/todo.model'

const LOCAL_STORAGE_KEY = 'todo-state'

const Filters = Object.freeze({
  All: 'all',
  Completed: 'completed',
  Pending: 'pending',
})

const state = {}

function loadStore() {
  const localStorageState = localStorage.getItem(LOCAL_STORAGE_KEY)
  
  const parsedState = JSON.parse(localStorageState)
  state.todos = parsedState?.todos ?? []
  state.filter = parsedState?.filter ?? Filters.All
}

function saveStateToLocalStorage() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
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
  saveStateToLocalStorage()
}

function toggleTodo(todoId) {
  const todo = state.todos.find((todo) => todo.id === todoId)
  todo.done = !todo.done
  saveStateToLocalStorage()

  // Menos eficiente:
  // state.todos = state.todos.map((todo) => {
  //   if (todo.id === todoId) todo.done = !todo.done
  //   return todo
  // })
}

function deleteTodo(todoId) {
  state.todos = state.todos.filter((todo) => todo.id !== todoId)
  saveStateToLocalStorage()
}

function deleteCompleted() {
  state.todos = state.todos.filter((todo) => !todo.done)
  saveStateToLocalStorage()
}

function setSelectedFilter(newFilter) {
  if (!Object.values(Filters).includes(newFilter)) {
    throw new Error('Invalid filter')
  }

  state.filter = newFilter
  saveStateToLocalStorage()
}

function getSelectedFilter() {
  return state.filter
}

export default {
  Filters,
  loadStore,
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  deleteCompleted,
  setSelectedFilter,
  getSelectedFilter,
}
