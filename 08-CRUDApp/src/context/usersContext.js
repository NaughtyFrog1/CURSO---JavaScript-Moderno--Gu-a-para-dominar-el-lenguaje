import loadUsersByPage from '../use-cases/loadUsersByPage'

const state = {
  currentPage: 0,
  users: [],
}

export async function loadPage(page) {
  if (page <= 0) return

  const users = await loadUsersByPage(page)

  if (users.length === 0 && page !== 1) return

  state.currentPage = page
  state.users = users
}

export async function loadNextPage() {
  await loadPage(state.currentPage + 1)
}

export async function loadPreviousPage() {
  await loadPage(state.currentPage - 1)
}

export function getUsers() {
  return [...state.users]
}

export function getCurrentPage() {
  return state.currentPage
}

export function addUserToCurrentPage(user) {
  if (state.users.length >= 10) {
    throw new Error('There are already 10 users on the page')
  }
  state.users.push(user)
}

export function updateStateUser(updatedUser) {
  state.users = state.users.map((user) => {
    return user.id === updatedUser.id ? updatedUser : user
  })
}
