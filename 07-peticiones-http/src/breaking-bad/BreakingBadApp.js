/**
 *
 * @param {HTMLDivElement} element
 */
export async function BreakingBadApp(element) {
  function renderLogin() {
    const pLabel = document.createElement('p')
    pLabel.innerText = 'Loading...'
    element.replaceChildren(pLabel)
  }
  
  function renderQuote({ quote, author }) {
    const quoteLabel = document.createElement('h4')
    const authorLabel = document.createElement('p')
    const nextQuoteBtn = document.createElement('button')

    quoteLabel.innerText = quote
    authorLabel.innerText = '— ' + author
    nextQuoteBtn.innerText = 'Next Quote'
    
    element.replaceChildren(quoteLabel, authorLabel, nextQuoteBtn)
    nextQuoteBtn.addEventListener('click', getQuote)
  }

  function renderError() {
    const errorMessageLabel = document.createElement('p')
    const tryAgainBtn = document.createElement('button')
    
    errorMessageLabel.innerText = 'Oops! something went wrong'
    tryAgainBtn.innerText = 'Try Again'

    element.replaceChildren(errorMessageLabel, tryAgainBtn)
    tryAgainBtn.addEventListener('click', getQuote)
  }

  function getQuote() {
    renderLogin()
    fetchQuote().then(renderQuote).catch(renderError)
  }

  getQuote()
}

async function fetchQuote() {
  const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
  if (res.ok) {
    const data = await res.json()
    return data[0]
  }
  throw new Error('Failed to fetch quote')
}
