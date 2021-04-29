const pageQuiz = getElement('.page-quiz')
const pageBookmarks = getElement('.page-bookmarks')
const pageCreate = getElement('.page-create')
const pageProfile = getElement('.page-profile')

const buttonQuiz = getElement('.button-quiz')
const buttonBookmarks = getElement('.button-bookmarks')
const buttonCreate = getElement('.button-create')
const buttonProfile = getElement('.button-profile')

const flagBookmark = getElement('.quiz-card__bookmark')

const answerButton = getElement('.quiz-card__button')
const answerText = getElement('.quiz-card__answer')

buttonQuiz.addEventListener('click', navigateToQuiz)
buttonBookmarks.addEventListener('click', navigateToBookmarks)
buttonCreate.addEventListener('click', navigateToCreate)
buttonProfile.addEventListener('click', navigateToProfile)

flagBookmark.addEventListener('click', toggleBookmark)

answerButton.addEventListener('click', toggleAnswerText)

function toggleBookmark() {
  flagBookmark.classList.toggle('quiz-card__bookmark--active')
}

function toggleAnswerText() {
  answerText.classList.toggle('quiz-card__answer--show')
}

function getElement(selector) {
  return document.querySelector(selector)
}

function navigateToQuiz() {
  changePage(pageQuiz)
  changeButtons(buttonQuiz)
}

function navigateToBookmarks() {
  changePage(pageBookmarks)
  changeButtons(buttonBookmarks)
}

function navigateToCreate() {
  changePage(pageCreate)
  changeButtons(buttonCreate)
}

function navigateToProfile() {
  changePage(pageProfile)
  changeButtons(buttonProfile)
}

// function changeHeaderText() {

// }

function changePage(page) {
  hideAllPages()
  page.classList.remove('hidden')
}

function changeButtons(button) {
  deactivateAllButtons()
  button.classList.add('active')
}

function deactivateAllButtons() {
  buttonQuiz.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
}

function hideAllPages() {
  pageQuiz.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
}

// answerButton.addEventListener('click', () => {
//   answerText.classList.toggle('quiz-card__answer--show')
// })

// const buttonDarkmode = document.querySelector('.darkmode-button')
// const body = document.querySelector('body')
// const quizCard = document.querySelector('.quiz-card')

// buttonDarkmode.addEventListener('click', () => {
//   body.classList.toggle('darkmode')
//   quizCard.classListremove('quiz-card')
//   quizCard.classList.add('quiz-card--darkmode')
// })
