import { addUserToCurrentPage, getUsers } from '../../context/usersContext'
import addUser from '../../use-cases/addUser'
import { updateTable } from '../Table/Table'
import FormUser from '../FormUser/FormUser'
import Modal from './Modal'
import User from '../../models/User.class'

function ModalNewUser() {
  const modal = Modal('Add new user', (parentNode) => {
    FormUser('Add', handleSubmit, parentNode)
  })

  return modal

  async function handleSubmit(e, user) {
    const newUser = User.mapUserFromServer(await addUser(user))
    if (getUsers().length < 10) {
      addUserToCurrentPage(newUser)
      updateTable()
    }

    e.target.reset()
    modal.hideModal()
  }
}

export default ModalNewUser
