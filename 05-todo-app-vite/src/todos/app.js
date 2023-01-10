/**
 * Con `?raw` al final le indicamos a vite que inserte el HTML tal cual como está
 */
import appHtml from './app.html?raw'

import todoStore from '../store/todo.store'
import { renderTodos } from '../use-cases/renderTodos'
import Todo from './models/todo.model'
import { renderPending } from '../use-cases/renderPending'

const ELEMENTS_REFENRECES = Object.freeze({
  TODOS_LIST: '.todo-list',
  NEW_TODO_INPUT: '#new-todo-input',
  CLEAR_COMPLETED_BTN: '.clear-completed',
  TODO_FILTERS_BTNS: '.filtro',
  PENDING_COUNT: '#pending-count'
})

export function app(elementId) {
  function updatePendingCounter() {
    const element = document.querySelector(ELEMENTS_REFENRECES.PENDING_COUNT)
    renderPending(element)
  }
  
  function displayTodos() {
    const todoList = document.querySelector(ELEMENTS_REFENRECES.TODOS_LIST)
    const todos = todoStore.getTodos(todoStore.getSelectedFilter())
    renderTodos(todoList, todos)
    updatePendingCounter()
  }

  ;(() => {
    const root = document.createElement('div')
    root.innerHTML = appHtml
    document.querySelector(elementId).append(root)
    todoStore.loadStore()
    displayTodos()
  })()

  const $newTodoInput = document.querySelector(
    ELEMENTS_REFENRECES.NEW_TODO_INPUT
  )
  const $todosListUl = document.querySelector(ELEMENTS_REFENRECES.TODOS_LIST)
  const $clearCompletedBtn = document.querySelector(
    ELEMENTS_REFENRECES.CLEAR_COMPLETED_BTN
  )
  const $filtersUl = document.querySelectorAll(
    ELEMENTS_REFENRECES.TODO_FILTERS_BTNS
  )

  document
    .querySelector(`[data-filter="${todoStore.getSelectedFilter()}"]`)
    .classList.add('selected')

  $newTodoInput.addEventListener('keyup', (e) => {
    if (e.keyCode !== 13 || e.target.value.trim().length === 0) return

    todoStore.addTodo(new Todo(e.target.value))
    e.target.value = ''
    displayTodos()
  })

  $todosListUl.addEventListener('click', (e) => {
    const element = e.target.closest('[data-id]')
    const elementId = element.getAttribute('data-id')
    todoStore.toggleTodo(elementId)
    displayTodos()
  })

  $todosListUl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('destroy')) return

    const element = e.target.closest('[data-id]')
    const elementId = element.getAttribute('data-id')
    todoStore.deleteTodo(elementId)
    displayTodos()
  })

  $clearCompletedBtn.addEventListener('click', () => {
    todoStore.deleteCompleted()
    displayTodos()
  })

  $filtersUl.forEach((element) => {
    element.addEventListener('click', (e) => {
      const $prevSelected = document.querySelector(
        `${ELEMENTS_REFENRECES.TODO_FILTERS_BTNS}.selected`
      )
      $prevSelected.classList.remove('selected')

      element.classList.add('selected')

      const newFilter = element.getAttribute('data-filter')
      todoStore.setSelectedFilter(newFilter)
      displayTodos()
    })
  })
  displayTodos()
}
