import './App.css'
import Header from '../Header/Header'
import Pagination from '../Pagination/Pagination'
import Table from '../Table/Table'

function App(parentNode) {
  Header(parentNode)

  const $main = document.createElement('main')
  $main.classList.add('main-content', 'container')
  parentNode.append($main)

  Table($main)
  Pagination($main)
}

export default App
