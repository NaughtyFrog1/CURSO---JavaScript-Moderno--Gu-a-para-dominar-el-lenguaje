import todoStore from "../store/todo.store";

export function renderPending(element) {
  element.innerHTML = todoStore.getTodos(todoStore.Filters.Pending).length
}