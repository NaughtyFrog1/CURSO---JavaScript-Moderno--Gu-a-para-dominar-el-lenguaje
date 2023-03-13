import { heroes } from '../data/heroes'

/**
 *
 * @param {HTMLDivElement} element
 */
export function promisesComponent(element) {
  const heroId = '5d86371f25a058e5b1c8a65e'

  // findHero(heroId)
  //   .then((hero) => {
  //     element.innerHTML = hero.name
  //   })
  //   .catch((error) => {
  //     element.innerHTML = error
  //   })

  // promiseHell(element)
  // promiseChaining(element)
  promiseAll(element)
}

function promiseHell(element) {
  const id1 = '5d86371f1efebc31def272e2'
  const id2 = '5d86371f25a058e5b1c8a65e'

  findHero(id1)
    .then((hero1) => {
      findHero(id2)
        .then((hero2) => {
          element.innerHTML = `${hero1.name}, ${hero2.name}`
        })
        .catch((error) => (element.innerHTML = error))
    })
    .catch((error) => (element.innerHTML = error))
}

function promiseChaining(element) {
  const id1 = '5d86371f1efebc31def272e2'
  const id2 = '5d86371f25a058e5b1c8a65e'

  let resolve1, resolve2

  findHero(id1)
    .then((h1) => {
      resolve1 = h1
      return findHero(id2)
    })
    .then((h2) => {
      resolve2 = h2
      element.innerHTML = `${resolve1.name}, ${resolve2.name}`
    })
    .catch((error) => {
      element.innerHTML = error
    })
}

function promiseAll(element) {
  const id1 = '5d86371f1efebc31def272e2'
  const id2 = '5d86371f25a058e5b1c8a65e'

  Promise.all([findHero(id1), findHero(id2)])
    .then((heroes) => {
      element.innerHTML = ''
      heroes.forEach(({name}) => element.innerHTML += name + ', ')
    })
    .catch((error) => {
      element.innerHTML = error
    })
}

/**
 *
 * @param {String} id
 * @returns { Promise }
 */
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
