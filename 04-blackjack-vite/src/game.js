import { crearDeck, getValorCarta, pedirCarta } from './cards'
import { TIPOS_CARTAS, TIPOS_ESPECIALES } from './constants'
import * as ui from './ui'

export function acumularPuntos(puntosJugadores, puntos, turno) {
  puntosJugadores[turno] += puntos
  ui.actualizarPuntos(puntosJugadores[turno], turno)
  return puntosJugadores[turno]
}

export function determinarGanador(puntosJugador, puntosComputadora) {
  setTimeout(() => {
    if (puntosComputadora > 21) {
      alert('Gana el jugador')
    } else if (puntosComputadora === puntosJugador) {
      alert('Empate')
    } else {
      alert('Gana la computadora')
    }
  }, 150)
}

export function turnoComputadora(puntosJugadores, deck) {
  const turnoPC = puntosJugadores.length - 1
  let puntosJugador = puntosJugadores[0]
  let puntosPC

  if (puntosJugador > 21) puntosJugador = -1

  do {
    const carta = pedirCarta(deck)
    puntosPC = acumularPuntos(puntosJugadores, getValorCarta(carta), turnoPC)
    ui.agregarCarta(carta, turnoPC)
  } while (puntosPC < puntosJugador)

  determinarGanador(puntosJugador, puntosPC)
}

export function finTurnoJugador(puntosJugadores, deck) {
  ui.deshabilitarBtnPedir()
  ui.deshabilitarBtnDetener()
  turnoComputadora(puntosJugadores, deck)
}

export function inicializarJuego(puntosJugadores, deck) {
  puntosJugadores.length = 0
  deck.length = 0

  const newDeck = crearDeck(TIPOS_CARTAS, TIPOS_ESPECIALES)
  while (newDeck.length > 0) deck.push(newDeck.pop())

  for (let i = 0; i < 2; i++) {
    puntosJugadores.push(0)
    ui.actualizarPuntos(0, i)
    ui.eliminarCartas(i)
  }
  ui.habilitarBtnPedir()
  ui.habilitarBtnDetener()
}
