import Todo from '../todos/models/todo.model'

/**
 *
 * @param {Todo} todo
 */
function createTodo(todo) {
  if (todo == null) throw new Error('A todo is required')

  const liElement = document.createElement('li')
  
  liElement.dataset.id = todo.id
  if (todo.done) liElement.classList.add('completed')

  liElement.innerHTML = `
    <div class="view">
      <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
      <label>${todo.description}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${todo.description}">
  `

  return liElement
}

export function renderTodos(parentNode, todos) {
  parentNode.innerHTML = ''

  todos.forEach((todo) => {
    parentNode.append(createTodo(todo))
  })
}
