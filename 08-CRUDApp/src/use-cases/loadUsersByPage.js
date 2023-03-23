import User from '../models/User.class'

export default async function loadUsersByPage(page) {
  const url = `${import.meta.env.VITE_SERVER_URL}/users?_page=${page}`
  const res = await fetch(url)
  const data = await res.json()
  return data.map(User.mapUserFromServer)
}
