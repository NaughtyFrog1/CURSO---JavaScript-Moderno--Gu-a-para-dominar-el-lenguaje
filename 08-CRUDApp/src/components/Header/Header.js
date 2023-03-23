import './Header.css'

function Header(parentNode) {
  const $header = document.createElement('header')
  $header.classList.add('site-header')
  $header.innerHTML = '<h1>CRUD App</h1>'

  parentNode.append($header)
}

export default Header
