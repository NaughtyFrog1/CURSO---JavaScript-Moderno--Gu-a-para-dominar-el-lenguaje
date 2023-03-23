export default async function updateUser(user) {
  const url = `${import.meta.env.VITE_SERVER_URL}/users/${user.id}`
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(user.mapUserToServer()),
    headers: {
      'Content-Type': 'application/JSON',
    },
  })
  return await res.json()
}
