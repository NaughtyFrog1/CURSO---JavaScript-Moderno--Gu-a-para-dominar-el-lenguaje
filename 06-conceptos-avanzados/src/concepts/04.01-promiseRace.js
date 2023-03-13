/**
 * 
 * @param {HTMLDivElement} element 
 */
export function promiseRaceComponent(element) {
  function renderValue(value) {
    element.innerHTML = value
  }

  renderValue('Loading...')
  Promise.race([
    slowPromise(),
    fastPromise(),
    mediumPromise(),
  ]).then(renderValue)
}

function slowPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow Promise resolved')
    }, 2000);
  })
}

function mediumPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Medium Promise resolved')
    }, 1500);
  })
}

function fastPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fast Promise resolved')
    }, 1000);
  })
}
