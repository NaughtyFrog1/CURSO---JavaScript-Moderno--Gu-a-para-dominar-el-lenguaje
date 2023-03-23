import './Pagination.css'
import * as usersContext from '../../context/usersContext'
import { updateTable } from '../Table/Table'

function Pagination(parentNode) {
  const $pagination = document.createElement('div')
  $pagination.classList.add('pagination')

  const $prevBtn = document.createElement('button')
  $prevBtn.classList.add('btn', 'bg-dark')
  $prevBtn.innerHTML = '&laquo;'

  const $pageNumber = document.createElement('span')
  $pageNumber.innerText = usersContext.getCurrentPage()

  const $nextBtn = document.createElement('button')
  $nextBtn.classList.add('btn', 'bg-dark')
  $nextBtn.innerHTML = '&raquo;'

  $pagination.append($prevBtn, $pageNumber, $nextBtn)
  parentNode.append($pagination)

  $prevBtn.addEventListener('click', async () => {
    await usersContext.loadPreviousPage()
    $pageNumber.innerText = usersContext.getCurrentPage()
    updateTable()
  })

  $nextBtn.addEventListener('click', async () => {
    await usersContext.loadNextPage()
    $pageNumber.innerText = usersContext.getCurrentPage()
    updateTable()
  })
}

export default Pagination
