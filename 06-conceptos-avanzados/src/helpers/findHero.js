import { heroes } from '../data/heroes'

/**
 *
 * @param {String} id
 * @param {(error?: string, hero: object) => void} callback
 */
export function findHero_callback(id, callback) {
  const hero = heroes.find((hero) => hero.id === id)
  if (!hero) {
    callback(`Hero with id "${id}" not found`)
    return
  }
  callback(null, hero)
}

/**
 *
 * @param {String} id
 * @returns { Promise }
 */
export function findHero_promise(id) {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((h) => h.id === id)
    if (hero) {
      resolve(hero)
      return
    }
    reject(`Hero with id "${id}" not found`)
  })
}

export async function findHero_async(id) {
  const hero = heroes.find((h) => h.id === id)

  if (hero) return hero
  throw new Error(`Hero with id "${id}" not found`)
}
