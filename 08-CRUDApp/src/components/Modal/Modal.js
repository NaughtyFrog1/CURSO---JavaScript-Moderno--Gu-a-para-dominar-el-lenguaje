import './Modal.css'

function Modal(title, ContentComponent, onShow, onHide) {
  // Modal Header Element

  const $modalHeaderTitle = document.createElement('h3')
  $modalHeaderTitle.innerText = title

  const $modalHeaderCloseBtn = document.createElement('button')
  $modalHeaderCloseBtn.classList.add('btn', 'bg-dark')
  $modalHeaderCloseBtn.innerHTML = '&times;'

  const $modalHeader = document.createElement('div')
  $modalHeader.classList.add('modal__header', 'bg-dark')
  $modalHeader.append($modalHeaderTitle, $modalHeaderCloseBtn)

  // Modal Content Element

  const $modalContent = document.createElement('div')
  $modalContent.classList.add('modal__content')
  ContentComponent($modalContent)

  // Modal Dialog Element
  const $modalDialog = document.createElement('div')
  $modalDialog.classList.add('modal__dialog')
  $modalDialog.append($modalHeader, $modalContent)

  // Modal Element

  const $modal = document.createElement('div')
  $modal.classList.add('modal')
  $modal.append($modalDialog)

  // Events

  $modal.addEventListener('click', function(e) {
    if (e.target !== this) return
    hideModal()
  })

  $modalHeaderCloseBtn.addEventListener('click', hideModal)

  // Functions

  function showModal() {
    document.body.appendChild($modal)
    if (onShow != null) onShow()
  }

  function hideModal() {
    document.body.removeChild($modal)
    if (onHide != null) onHide()
  }

  return { showModal, hideModal }
}

export default Modal
