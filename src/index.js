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

buttonQuiz.addEventListener('click', () => {
  pageQuiz.classList.remove('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')

  buttonQuiz.classList.add('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonBookmarks.addEventListener('click', () => {
  pageQuiz.classList.add('hidden')
  pageBookmarks.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')

  buttonQuiz.classList.remove('active')
  buttonBookmarks.classList.add('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.remove('active')
})

buttonCreate.addEventListener('click', () => {
  pageQuiz.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  pageProfile.classList.add('hidden')

  buttonQuiz.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.add('active')
  buttonProfile.classList.remove('active')
})

buttonProfile.addEventListener('click', () => {
  pageQuiz.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.remove('hidden')

  buttonQuiz.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonProfile.classList.add('active')
})

flagBookmark.addEventListener('click', () => {
  flagBookmark.classList.toggle('quiz-card__bookmark--active')
})

answerButton.addEventListener('click', () => {
  answerText.classList.toggle('quiz-card__answer--show')
})
