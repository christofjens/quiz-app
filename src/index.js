// import setupBookmarks from './setupBookmarks'
// import setupNavigation from './setupNavigation'
// import setupQuizCards from './setupQuizCards'

// setupQuizCards()
// setupBookmarks()
// setupNavigation()

import getElement from './utils/getElement'
import getAllElements from './utils/getAllElements'

const quizCardButtons = getAllElements('[data-quiz-card-button]')

quizCardButtons.forEach(quizCardButton => {
  quizCardButton.addEventListener('click', () => {
    const quizCardAnswer = getElement('[data-quiz-card-answer]')
    quizCardAnswer.classList.toggle('quiz-card__answer--show')
  })
})
