import { getCurrentPage, getUsers, loadPage, loadPreviousPage } from '../../context/usersContext'
import deleteUserById from '../../use-cases/deleteUserById'
import ModalUpdateUser from '../Modal/ModalUpdateUser'
import { updateTable } from './Table'

const modal = ModalUpdateUser()

function TableRow(user, parentNode) {
  const $row = document.createElement('tr')
  $row.innerHTML = `
    <td class="users-table__id">${user.id}</td>
    <td class="users-table__avatar"></td>
    <td>${user.firstname}</td>
    <td>${user.lastname}</td>
    <td class="users-table__gender">${user.gender}</td>
    <td class="users-table__balance">${user.balance}</td>
    <td class="users-table__isActive">
      <div>
        <input type="checkbox" disabled ${user.isActive ? 'checked' : ''} />
      </div>
    </td>
    <td class="users-table__actions">
      <div></div>
    </td>
  `

  const $avatarImg = document.createElement('img')
  $avatarImg.src = user.avatar
  $row.querySelector('.users-table__avatar').append($avatarImg)

  const $actionUpdateBtn = document.createElement('button')
  $actionUpdateBtn.classList.add('users-table__action-btn')
  $actionUpdateBtn.innerHTML = '<img src="./edit.svg" />'

  const $actionDeleteBtn = document.createElement('button')
  $actionDeleteBtn.classList.add('users-table__action-btn')
  $actionDeleteBtn.innerHTML = '<img src="./trash.svg" />'

  $row
    .querySelector('.users-table__actions div')
    .append($actionUpdateBtn, $actionDeleteBtn)

  parentNode.append($row)

  $avatarImg.addEventListener('error', handleAvatarImageError)
  $actionUpdateBtn.addEventListener('click', () => modal.showModal(user))
  $actionDeleteBtn.addEventListener('click', handleDeleteBtnClick)

  function handleAvatarImageError(e) {
    const $container = $row.querySelector('.users-table__avatar')
    $container.innerHTML = `
      <div class="bg-dark">
        <span>${user.firstname[0]}${user.lastname[0]}</span>
      </div>
    `
  }

  async function handleDeleteBtnClick() {
    await deleteUserById(user.id)

    if (getUsers().length === 1 && getCurrentPage() > 1) {
        await loadPreviousPage()
    } else {
      await loadPage(getCurrentPage())
    }
    updateTable()
  }
}

export default TableRow
