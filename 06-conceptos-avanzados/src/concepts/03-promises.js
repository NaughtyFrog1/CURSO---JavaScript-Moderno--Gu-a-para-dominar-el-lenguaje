import { findHero_promise } from '../helpers/findHero'

export function promiseComponent(element) {
  const id = '5d86371f25a058e5b1c8a65e'

  findHero(id)
    .then((hero) => {
      element.innerHTML = hero.name
    })
    .catch((error) => {
      element.innerHTML = error
    })
}

export function promiseHellComponent(element) {
  const id1 = '5d86371f1efebc31def272e2'
  const id2 = '5d86371f25a058e5b1c8a65e'

  findHero_promise(id1)
    .then((hero1) => {
      findHero_promise(id2)
        .then((hero2) => {
          element.innerHTML = `${hero1.name}, ${hero2.name}`
        })
        .catch((error) => (element.innerHTML = error))
    })
    .catch((error) => (element.innerHTML = error))
}

export function promiseChainingComponent(element) {
  const id1 = '5d86371f1efebc31def272e2'
  const id2 = '5d86371f25a058e5b1c8a65e'

  let resolve1, resolve2

  findHero_promise(id1)
    .then((h1) => {
      resolve1 = h1
      return findHero_promise(id2)
    })
    .then((h2) => {
      resolve2 = h2
      element.innerHTML = `${resolve1.name}, ${resolve2.name}`
    })
    .catch((error) => {
      element.innerHTML = error
    })
}

export function promiseAllComponent(element) {
  const id1 = '5d86371f1efebc31def272e2'
  const id2 = '5d86371f25a058e5b1c8a65e'

  Promise.all([findHero_promise(id1), findHero_promise(id2)])
    .then((heroes) => {
      element.innerHTML = ''
      heroes.forEach(({ name }) => (element.innerHTML += name + ', '))
    })
    .catch((error) => {
      element.innerHTML = error
    })
}
