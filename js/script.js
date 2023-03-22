const adviceParagraph = document.querySelector('[data-advice-text]')
const adviceNumberSpan = document.querySelector('[data-advice-number]')
const btnGenerateAdvice = document.querySelector('[data-btn-generate]')


async function getData() {
  const res = await fetch('https://api.adviceslip.com/advice')
  const data = res.json()

  return data
}

btnGenerateAdvice.addEventListener('click', () => {
  getData()
  .then(data => {
    adviceNumberSpan.innerText = data.slip.id
    adviceParagraph.innerText = data.slip.advice
  })
})
