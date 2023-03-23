import { updateStateUser } from '../../context/usersContext'
import User from '../../models/User.class'
import updateUser from '../../use-cases/updateUser'
import FormUser from '../FormUser/FormUser'
import { updateTable } from '../Table/Table'
import Modal from './Modal'

function ModalUpdateUser() {
  let user

  const modal = Modal(
    'Update user',
    (parentNode) => FormUser('Update', handleSubmit, parentNode),
    setFormValues
  )


  function showModal(u) {
    user = u
    modal.showModal()
  }

  return { hideModal: modal.hideModal, showModal }

  async function handleSubmit(e, updatedUser) {
    updatedUser.id = user.id
    const newUser = User.mapUserFromServer(await updateUser(updatedUser))
    updateStateUser(newUser)
    updateTable()
    modal.hideModal()
  }

  function setFormValues() {
    const $form = document.querySelector('form')
    $form.querySelector('[name="firstname"]').value = user.firstname
    $form.querySelector('[name="lastname"]').value = user.lastname
    $form.querySelector('[name="gender"]').value = user.gender
    $form.querySelector('[name="balance"]').value = user.balance
    $form.querySelector('[name="avatar"]').value = user.avatar
    $form.querySelector('[name="isActive"]').checked = user.isActive
  }
}

export default ModalUpdateUser
