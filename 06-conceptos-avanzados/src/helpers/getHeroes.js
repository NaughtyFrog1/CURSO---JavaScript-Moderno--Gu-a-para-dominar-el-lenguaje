import { heroes } from '../data/heroes'

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
export function getHeroesAsync(heroesIds) {
  return heroesIds.map(getHeroAsync)
}

export async function getHeroAsync(id) {
  // Espera un segundo
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })

  return heroes.find((h) => h.id === id)
}
