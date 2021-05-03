import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

export default function setupQuizCards() {
  const quizCards = getAllElements('[data-quiz-card]')

  quizCards.forEach(card => {
    const answerButton = getElement('[data-quiz-card-button]', card)
    const answer = getElement('[data-quiz-card-answer]', card)
    answerButton.addEventListener('click', () => {
      answer.classList.toggle('quiz-card__answer--show')
    })
  })
}
