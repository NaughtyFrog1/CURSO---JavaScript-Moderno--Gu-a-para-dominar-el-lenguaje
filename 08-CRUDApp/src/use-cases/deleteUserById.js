export default async function deleteUserById(id) {
  const url = `${import.meta.env.VITE_SERVER_URL}/users/${id}`
  const res = await fetch(url, {
    method: 'DELETE',
  })
  return await res.json()
}
