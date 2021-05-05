export default function createQuizCard() {
  const form = document.querySelector('[data-create-card')
  const questionSection = document.querySelector('[data-page="bookmarks"]')

  form.addEventListener('submit', handleSubmit)

  const quizCards = loadFromLocal('quizCards') ?? []
  quizCards.forEach(renderQuizCard)

  function handleSubmit(event) {
    event.preventDefault()
    const { question, answer, tags } = form.elements

    const newQuizCard = {
      answer: answer.value,
      question: question.value,
      tags: tags.value,
    }

    renderQuizCard(newQuizCard)
    quizCards.push(newQuizCard)
    saveToLocal('quizCard', quizCards)
    form.reset()
  }

  function renderQuizCard(quizCard) {
    const { question, answer, tags } = quizCard
    const quizCardEl = document.createElement('div')
    quizCardEl.innerHTML = `
        <section class="quiz-card" data-quiz-card>
            <div
                role="button"
                class="quiz-card__bookmark"
                aria-label="Bookmark this Question"
                data-bookmark>
            </div>
            <h2 class="quiz-card__headline">Question:</h2>
            <p class="quiz-card__text">${question} </p>
            <button class="quiz-card__button" data-quiz-card-button>Show Answer</button>
            <p class="quiz-card__answer" data-quiz-card-answer>${answer}</p>
            <ul class="quiz-card__tag-cloud">
                <li class="quiz-card__tag-cloud--item">${tags}</li>
            </ul>
        </section>
  `

    questionSection.append(quizCardEl)
  }

  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    return JSON.parse(jsonString)
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
