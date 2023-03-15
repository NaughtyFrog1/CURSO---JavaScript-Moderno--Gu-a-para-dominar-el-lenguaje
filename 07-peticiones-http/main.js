import './style.css'
import javascriptLogo from './javascript.svg'
import { BreakingBadApp } from './src/breaking-bad/BreakingBadApp'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="app-title">Breaking Bad App </h1>
    <div class="card">

    </div>
  </div>
`

const element = document.querySelector('.card')

BreakingBadApp(element)
