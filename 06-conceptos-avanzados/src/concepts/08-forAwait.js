import { getHeroAsync, getHeroesAsync } from '../helpers/getHeroes'

export async function ifAwaitComponent(element) {
  const id1 = '5d86371f1efebc31def272e2'

  if (await getHeroAsync(id1)) {
    element.innerHTML = 'El héroe existe'
  } else {
    element.innerHTML = 'El héroe no existe'
  }
}

export async function forAwaitComponent(element) {
  const ids = [
    '5d86371f1efebc31def272e2',
    '5d86371f2343e37870b91ef1',
    '5d86371f25a058e5b1c8a65e',
    '5d86371f9f80b591f499df32',
  ]

  element.innerHTML = ''

  for await (const hero of getHeroesAsync(ids)) {
    element.innerHTML += hero.name + '<br />'
  }

  // Otra opción:
  // for (const hero of getHeroesAsync(ids)) {
  //   const { name } = await hero
  //   element.innerHTML += name + '<br />'
  // 
  //   // No funciona
  //   // element.innerHTML += await hero.name + '<br />'
  // }
}
