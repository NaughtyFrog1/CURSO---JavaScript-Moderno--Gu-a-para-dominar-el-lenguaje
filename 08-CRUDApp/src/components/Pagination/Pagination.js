function Pagination(parentNode) {
  const $pagination = document.createElement('div')
  $pagination.classList.add('pagination')

  const $prevBtn = document.createElement('button')
  $prevBtn.innerHTML = '&laquo;'

  const $pageNumber = document.createElement('span')
  $pageNumber.innerText = '0'

  const $nextBtn = document.createElement('button')
  $nextBtn.innerHTML = '&raquo;'

  $pagination.append($prevBtn, $pageNumber, $nextBtn)
  parentNode.append($pagination)
}

export default Pagination
