import { PATH_CARTAS } from './constants'

const $btnNuevo = document.querySelector('#btnNuevo')
const $btnPedir = document.querySelector('#btnPedir')
const $btnDetener = document.querySelector('#btnDetener')
const $puntosHtml = document.querySelectorAll('small')
const $cartas = document.querySelectorAll('.cartas')

export function actualizarPuntos(puntos, turno) {
  $puntosHtml[turno].innerHTML = puntos
}

export function agregarCarta(carta, turno) {
  const imgCarta = document.createElement('img')
  imgCarta.classList.add('carta')
  imgCarta.src = `${PATH_CARTAS}/${carta}.png`
  imgCarta.alt = `Carta ${carta}`
  $cartas[turno].append(imgCarta)
}

export function eliminarCartas(turno) {
  $cartas[turno].innerHTML = ''
}

export function deshabilitarBtnPedir() {
  $btnPedir.disabled = true
}

export function habilitarBtnPedir() {
  $btnPedir.disabled = false
}

export function deshabilitarBtnDetener() {
  $btnDetener.disabled = true
}

export function habilitarBtnDetener() {
  $btnDetener.disabled = false
}

export function getBtnNuevo() {
  return $btnNuevo
}

export function getBtnPedir() {
  return $btnPedir
}

export function getBtnDetener() {
  return $btnDetener
}
