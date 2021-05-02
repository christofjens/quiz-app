import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

export default function setupQuizCards() {
  const quizCardButtons = getAllElements('[data-quiz-card-button]')

  quizCardButtons.forEach(quizCardButton => {
    quizCardButton.addEventListener('click', event => {
      const quizCardAnswer = getElement(
        '[data-quiz-card-answer]',
        event.target.parentNode
      )
      quizCardAnswer.classList.toggle('quiz-card__answer--show')
    })
  })
}
