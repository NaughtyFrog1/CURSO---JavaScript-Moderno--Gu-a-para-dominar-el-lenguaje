import './App.css'
import Header from '../Header/Header'
import Pagination from '../Pagination/Pagination'
import Table from '../Table/Table'
import { loadPage } from '../../context/usersContext'
import NewUserButton from '../NewUserButton/NewUserButton'

async function App(parentNode) {
  await loadPage(1)

  Header(parentNode)

  const $main = document.createElement('main')
  $main.classList.add('main-content', 'container')
  parentNode.append($main)

  Table($main)

  const $mainFooter = document.createElement('div')
  $mainFooter.classList.add('main-content__footer')
  $main.append($mainFooter)

  Pagination($mainFooter)
  NewUserButton($mainFooter)
}

export default App
