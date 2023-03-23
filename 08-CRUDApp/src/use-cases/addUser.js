export default async function addUser(user) {
  const url = `${import.meta.env.VITE_SERVER_URL}/users`
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user.mapUserToServer()),
    headers: { 'Content-Type': 'application/JSON' },
  })
  return await res.json()
}
