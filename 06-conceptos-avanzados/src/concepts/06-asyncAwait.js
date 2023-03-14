import { findHero_async } from '../helpers/findHero'

export async function asyncAwaitComponent(element) {
  const id1 = '5d86371f1efebc31def272e2'
  const id2 = '5d86371f2343e37870b91ef1'

  try {
    const { name: name1 } = await findHero_async(id1)
    const { name: name2 } = await findHero_async(id2)
    element.innerHTML = `${name1}, ${name2}`
  } catch (error) {
    element.innerHTML = error
  }
}
