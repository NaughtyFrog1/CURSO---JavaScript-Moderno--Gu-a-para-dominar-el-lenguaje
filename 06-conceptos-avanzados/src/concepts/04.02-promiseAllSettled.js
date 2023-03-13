import { heroes } from '../data/heroes'

/**
 *
 * @param {HTMLDivElement} element
 */
export function promiseAllSettledComponent(element) {
  function appendValue(value) {
    element.innerHTML += value
  }

  const heroes = [
    findHero('5d86371f1efebc31def272e2'),  // Iron Man
    findHero('5d86371f2343e37870b91ef1'),  // Hulk
    findHero('5d86371f25a058e5b1c8a65e'),  // Captain America
    findHero('5d86371f25a058e5b1c-XXXX'),  // Error
  ]

  element.innerHTML = ''
  Promise.allSettled(heroes)
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          appendValue(result.value.name)
        } else {
          appendValue(result.reason)
        }
        appendValue('<br />')
      })
    })
}

function findHero(id) {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((h) => h.id === id)

    if (hero) {
      resolve(hero)
      return
    }
    reject(`Hero with id "${id}" not found`)
  })
}
