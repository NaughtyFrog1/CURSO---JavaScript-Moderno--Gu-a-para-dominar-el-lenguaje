import './Table.css'
import { getUsers } from '../../context/usersContext'
import TableRow from './TableRow'

let $table, $tbody

function Table(parentNode) {
  $table = document.createElement('table')
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
      <th>Active?</th>
      <th>Actions</th>
    </tr>
  `

  $tbody = document.createElement('tbody')
  updateTable()

  $table.append($thead, $tbody)
  parentNode.append($table)
}

function updateTable() {
  $tbody.innerHTML = ''
  getUsers().forEach((user) => TableRow(user, $tbody))
}

export { Table as default, updateTable }
