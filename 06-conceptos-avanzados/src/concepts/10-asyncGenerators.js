import { heroes } from "../data/heroes"

export async function asyncGeneratorsComponent(element) {
  const heroGenerator = getHeroGenerator()

  let hero = await heroGenerator.next()
  while (!hero.done) {
    element.innerHTML = hero.value
    hero = await heroGenerator.next()
  }
}

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep();
    yield hero.name
  }
}

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}
