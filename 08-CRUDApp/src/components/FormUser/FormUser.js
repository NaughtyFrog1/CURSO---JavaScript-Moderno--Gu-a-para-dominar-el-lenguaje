import User from '../../models/User.class'
import './FormUser.css'
import formHtml from './FormUser.html?raw'

function FormUser(submitText, submitAction, parentNode) {
  parentNode.innerHTML = formHtml
  parentNode.querySelector('button[type="submit"]').innerText = submitText
  parentNode.querySelector('form').addEventListener('submit', handleSubmit)

  function handleSubmit(e) {
    e.preventDefault()

    const $firstname = e.target.querySelector('[name="firstname"]')
    const $lastname = e.target.querySelector('[name="lastname"]')
    const $gender = e.target.querySelector('[name="gender"]')
    const $balance = e.target.querySelector('[name="balance"]')
    const $avatar = e.target.querySelector('[name="avatar"]')
    const $isActive = e.target.querySelector('[name="isActive"]')

    const firstnameValue = $firstname.value.trim()
    const lastnameValue = $lastname.value.trim()
    const genderValue = $gender.value.trim()
    const balanceValue = parseFloat($balance.value, 10)
    const avatarValue = $avatar.value.trim()
    const isActiveValue = $isActive.checked

    if (!validateInputs()) return

    const user = new User(
      null,
      firstnameValue,
      lastnameValue,
      balanceValue,
      genderValue,
      isActiveValue,
      avatarValue
    )

    submitAction(e, user)

    function validateInputs() {
      let isValid = true

      if (firstnameValue === '') {
        isValid = false
        setError($firstname)
      } else {
        removeError($firstname)
      }

      if (lastnameValue === '') {
        isValid = false
        setError($lastname)
      } else {
        removeError($lastname)
      }

      if (!['male', 'female', 'other'].includes(genderValue)) {
        isValid = false
        setError($gender)
      } else {
        removeError($gender)
      }

      if (Number.isNaN(balanceValue)) {
        isValid = false
        setError($balance)
      } else {
        removeError($balance)
      }

      return isValid
    }

    function setError(element) {
      element.parentElement.classList.add('error')
    }

    function removeError(element) {
      element.parentElement.classList.remove('error')
    }
  }
}

export default FormUser
