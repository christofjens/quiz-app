const pageQuiz = document.querySelector('.page-quiz')
const pageBookmarks = document.querySelector('.page-bookmarks')
const pageCreate = document.querySelector('.page-create')
const pageProfile = document.querySelector('.page-profile')

const buttonQuiz = document.querySelector('.button-quiz')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonProfile = document.querySelector('.button-profile')

const flagBookmark = document.querySelector('.quiz-card__bookmark')

const answerButton = document.querySelector('.quiz-card__button')
const answerText = document.querySelector('.quiz-card__answer')

const hideAllPages = () => {
  pageQuiz.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
}

const deactivateAllButtons = () => {
  buttonQuiz.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
}

buttonQuiz.addEventListener('click', () => {
  hideAllPages()
  pageQuiz.classList.remove('hidden')

  deactivateAllButtons()
  buttonQuiz.classList.add('active')
})

buttonBookmarks.addEventListener('click', () => {
  hideAllPages()
  pageBookmarks.classList.remove('hidden')

  deactivateAllButtons()
  buttonBookmarks.classList.add('active')
})

buttonCreate.addEventListener('click', () => {
  hideAllPages()
  pageCreate.classList.remove('hidden')

  deactivateAllButtons()
  buttonCreate.classList.add('active')
})

buttonProfile.addEventListener('click', () => {
  hideAllPages()
  pageProfile.classList.remove('hidden')

  deactivateAllButtons()
  buttonProfile.classList.add('active')
})

flagBookmark.addEventListener('click', () => {
  flagBookmark.classList.toggle('quiz-card__bookmark--active')
})

answerButton.addEventListener('click', () => {
  answerText.classList.toggle('quiz-card__answer--show')
})

const buttonDarkmode = document.querySelector('.darkmode-button')
const body = document.querySelector('body')
const quizCard = document.querySelector('.quiz-card')

buttonDarkmode.addEventListener('click', () => {
  body.classList.toggle('darkmode')
  quizCard.classListremove('quiz-card')
  quizCard.classList.add('quiz-card--darkmode')
})
