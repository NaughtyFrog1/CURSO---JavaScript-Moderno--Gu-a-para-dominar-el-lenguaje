export async function asyncAwaitNoSecuencialComponent(element) {
  // 🚨 Mal
  // const slow = await slowPromise()
  // const medium = await mediumPromise()
  // const fast = await fastPromise()

  // ✅ Bien
  const [slow, medium, fast] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ])

  element.innerHTML = `slow: ${slow} <br />`
  element.innerHTML += `medium: ${medium} <br />`
  element.innerHTML += `fast: ${fast} <br />`
}

function slowPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow Promise resolved')
    }, 2000)
  })
}

function mediumPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Medium Promise resolved')
    }, 1500)
  })
}

function fastPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fast Promise resolved')
    }, 1000)
  })
}
