import { heroes } from '../data/heroes'

export function multiplePromisesComponent(element) {
  const heroesIds = [
    '5d86371f1efebc31def272e2', // Iron Man
    '5d86371f2343e37870b91ef1', // Hulk
    '5d86371f25a058e5b1c8a65e', // Captain America
    '5d86371f25a058e5b1c-XXXX', // Error
  ]

  element.innerHTML = ''
  heroesIds.forEach((id) => {
    element.innerHTML += `<span data-id="${id}">Loading...</span>`
    element.innerHTML += '<br />'
  })

  const heroesPromises = heroesIds.map((id) =>
    delayedFindHero(id, getRandomNumber(1000, 3000))
  )

  heroesPromises.forEach((promise) => {
    promise.then(renderHero).catch(renderError)
  })
}

//
// HELPERS

function getRandomNumber(lower, upper) {
  const diff = upper - lower
  return Math.floor(Math.random() * diff + lower)
}

function findHero(id) {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((h) => h.id === id)

    if (hero) {
      resolve(hero)
      return
    } else {
      reject({ id, message: `Hero with id "${id}" not found` })
    }
  })
}

function delayedFindHero(id, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      findHero(id).then(resolve).catch(reject)
    }, delay)
  })
}

function renderHero(hero) {
  const span = document.querySelector(`span[data-id="${hero.id}"]`)
  span.innerHTML = hero.name
}

function renderError(error) {
  const span = document.querySelector(`span[data-id="${error.id}"]`)
  span.innerHTML = 'ERROR: ' + error.message
}
