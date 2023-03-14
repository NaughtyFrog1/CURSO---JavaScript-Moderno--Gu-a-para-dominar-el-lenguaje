import { findHero_async } from "../helpers/findHero"

export function asyncComponent(element) {
  const id1 = '5d86371f1efebc31def272e2'
  findHero_async(id1)
    .then((hero) => element.innerHTML = hero.name)
    .catch((error) => element.innerHTML = error)
}
