import { getValorCarta, pedirCarta } from './cards'
import { acumularPuntos, finTurnoJugador, inicializarJuego } from './game'
import { agregarCarta } from './ui'

export function handleClickBtnPedir(deck, puntosJugadores) {
  const carta = pedirCarta(deck)
  const valorCarta = getValorCarta(carta)
  const puntosJugador = acumularPuntos(puntosJugadores, valorCarta, 0)
  agregarCarta(carta, 0)
  if (puntosJugador >= 21) finTurnoJugador(puntosJugadores, deck)
}

export function handleClickBtnDetener(deck, puntosJugadores) {
  finTurnoJugador(puntosJugadores, deck)
}

export function handleClickBtnNuevo(deck, puntosJugadores) {
  inicializarJuego(puntosJugadores, deck)
}
