import ModalNewUser from '../Modal/ModalNewUser'
import './NewUserButton.css'

function NewUserButton(parentNode) {
  const $newUserBtn = document.createElement('button')
  $newUserBtn.classList.add('btn', 'btn--primary', 'bg-light', 'new-user-btn')
  $newUserBtn.innerHTML = '&plus;'

  parentNode.append($newUserBtn)

  const modal = ModalNewUser()

  $newUserBtn.addEventListener('click', modal.showModal)
}

export default NewUserButton
