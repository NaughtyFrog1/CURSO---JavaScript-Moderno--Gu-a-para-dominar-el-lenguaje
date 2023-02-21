import { heroes } from '../data/heroes'

/**
 *
 * @param {HTMLDivElement} element
 */
export function callbacksComponent(element) {
  const id = '5d86371f1efebc31def272e2'
  findHero(id, (error, hero) => {
    element.innerHTML = error ?? hero.name
  })
}

/**
 * 
 * @param {String} id 
 * @param {(error?: string, hero: object) => void} callback 
 */
function findHero(id, callback) {
  const hero = heroes.find(hero => hero.id === id)

  if (!hero) {
    callback(`Hero with id "${id}" not fount`)
    return
  }

  callback(null, hero)
}
