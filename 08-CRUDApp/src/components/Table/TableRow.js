function TableRow(user, parentNode) {
  const $row = document.createElement('tr')
  $row.innerHTML = `
    <td class="users-table__id">${user.id}</td>
    <td class="users-table__avatar">
      <img src="${user.avatar}" />
    </td>
    <td>${user.firstname}</td>
    <td>${user.lastname}</td>
    <td class="users-table__gender">${user.gender}</td>
    <td class="users-table__balance">${user.balance}</td>
    <td class="users-table__isActive">
      <div>
        <input type="checkbox" disabled ${user.isActive ? 'checked' : ''} />
      </div>
    </td>
  `

  const $actionUpdateBtn = document.createElement('button')
  $actionUpdateBtn.classList.add('users-table__action-btn')
  $actionUpdateBtn.innerHTML = '<img src="./edit.svg" />'

  const $actionDeleteBtn = document.createElement('button')
  $actionDeleteBtn.classList.add('users-table__action-btn')
  $actionDeleteBtn.innerHTML = '<img src="./trash.svg" />'

  const $actionsContent = document.createElement('div')
  $actionsContent.append($actionUpdateBtn, $actionDeleteBtn)

  const $actions = document.createElement('td')
  $actions.classList.add('users-table__actions')
  $actions.append($actionsContent)

  $row.append($actions)
  parentNode.append($row)

  $actionUpdateBtn.addEventListener('click', () => {
    console.log('click update', user)
  })

  $actionDeleteBtn.addEventListener('click', () => {
    console.log('click delete', user)
  })
}

export default TableRow
