import { findHero_callback } from '../helpers/findHero'

export function callbacksComponent(element) {
  const id = '5d86371f1efebc31def272e2'
  findHero_callback(id, (error, hero) => {
    element.innerHTML = error ?? hero.name
  })
}
