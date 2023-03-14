import './style.css'
import javascriptLogo from './javascript.svg'
import { environmentsComponent } from './src/concepts/01-environments'
import { callbacksComponent } from './src/concepts/02-callbacks'
import * as promises from './src/concepts/03-promises'
import { promiseAllSettledComponent } from './src/concepts/04.02-promiseAllSettled'
import { multiplePromisesComponent } from './src/concepts/04.03-multiplePromises'
import { asyncComponent } from './src/concepts/05-async'
import { asyncAwaitComponent } from './src/concepts/06-asyncAwait'
import { asyncAwaitNoSecuencialComponent } from './src/concepts/07-asyncAwaitNoSecuencial'

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
// promises.promiseComponent(element)
// promises.promiseHellComponent(element)
// promises.promiseChainingComponent(element)
// promises.promiseAllComponent(element)
// promiseRaceComponent(element)
// promiseAllSettledComponent(element)
// multiplePromisesComponent(element)
// asyncComponent(element)
// asyncAwaitComponent(element)
asyncAwaitNoSecuencialComponent(element)
