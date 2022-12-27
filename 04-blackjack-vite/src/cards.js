import { shuffle } from 'underscore'

export function crearDeck(tiposCartas, tiposEspeciales) {
  const tmpDeck = []
  for (const tipo of tiposCartas) {
    for (let i = 2; i <= 10; i++) tmpDeck.push(i + tipo)
    for (const especial of tiposEspeciales) tmpDeck.push(especial + tipo)
  }
  return shuffle(tmpDeck)
}

export function pedirCarta(deck) {
  if (deck.length === 0) {
    throw new Error('Error: No hay cartas en el deck')
  }
  return deck.pop()
}

export function getValorCarta(carta) {
  const valor = carta.substring(0, carta.length - 1)
  if (isNaN(valor)) return valor === 'A' ? 11 : 10
  return parseInt(valor)
}
