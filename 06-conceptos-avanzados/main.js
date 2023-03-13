import './style.css'
import javascriptLogo from './javascript.svg'
import { environmentsComponent } from './src/concepts/01-environments'
import { callbacksComponent } from './src/concepts/02-callbacks'
import { promisesComponent } from './src/concepts/03-promises'
import { promiseRaceComponent } from './src/concepts/04.01-promiseRace'
import { promiseAllSettledComponent } from './src/concepts/04.02-promiseAllSettled'
import { testComponent } from './src/concepts/99-test'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Variables de entorno</h1>
    <pre class="card" style="text-align: left">
    </pre>
  </div>
`

const element = document.querySelector('pre.card')

// environmentsComponent(element)
// callbacksComponent(element)
// promisesComponent(element)
// promiseRaceComponent(element)
// promiseAllSettledComponent(element)
testComponent(element)
