function Table(parentNode) {
  const $table = document.createElement('table')
  $table.classList.add('users-table')

  const $thead = document.createElement('thead')
  $thead.classList.add('bg-dark')
  $thead.innerHTML = `
    <tr>
      <th>#ID</th>
      <th>Avatar</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>Balance</th>
      <th>Is Active</th>
    </tr>
  `

  const $tbody = document.createElement('tbody')

  $table.append($thead, $tbody)

  parentNode.append($table)
}

export default Table
