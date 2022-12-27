import './style.css'

import * as events from './src/events'
import { getBtnDetener, getBtnNuevo, getBtnPedir } from './src/ui'
import { inicializarJuego } from './src/game'

let deck = [] // Mazo de cartas
let puntosJugadores = []

inicializarJuego(puntosJugadores, deck)

getBtnPedir().addEventListener('click', () => {
  events.handleClickBtnPedir(deck, puntosJugadores)
})

getBtnDetener().addEventListener('click', () => {
  events.handleClickBtnDetener(deck, puntosJugadores)
})

getBtnNuevo().addEventListener('click', () => {
  events.handleClickBtnNuevo(deck, puntosJugadores)
})
