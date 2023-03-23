import './NewUserButton.css'

function NewUserButton(parentNode) {
  const $newUserBtn = document.createElement('button')
  $newUserBtn.classList.add('btn', 'new-user-btn', 'bg-light')
  $newUserBtn.innerHTML = '&plus;'

  parentNode.append($newUserBtn)

  $newUserBtn.addEventListener('click', () => {
    console.log('click new user')
  })
}

export default NewUserButton
