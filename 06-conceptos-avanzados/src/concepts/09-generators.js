export function generatorsComponent(element) {
  const div = element.parentElement

  const $btn = document.createElement('button')
  $btn.innerText = 'Click me'
  $btn.style.width = '8rem'
  div.append($btn)

  const evenNumber = evenNumberGenerator()

  $btn.addEventListener('click', () => {
    $btn.innerText = evenNumber.next().value
  })
}

function* evenNumberGenerator() {
  let currentNumber = 0
  while (true) {
    yield (currentNumber += 2)
  }
}
