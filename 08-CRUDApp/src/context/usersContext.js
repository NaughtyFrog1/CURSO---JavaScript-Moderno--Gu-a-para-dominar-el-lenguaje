import loadUsersByPage from '../use-cases/loadUsersByPage'

const state = {
  currentPage: 0,
  users: [],
}

export async function loadPage(page) {
  if (page <= 0) return

  const users = await loadUsersByPage(page)
  if (users.length === 0) return

  state.currentPage = page
  state.users = await loadUsersByPage(page)
}

export async function loadNextPage() {
  loadPage(state.currentPage + 1)
}

export async function loadPreviousPage() {
  loadPage(state.currentPage - 1)
}

export function getUsers() {
  return [...state.users]
}

export function getCurrentPage() {
  return state.currentPage
}
