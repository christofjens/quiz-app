import getAllElements from './utils/getAllElements'

export default function setupBookmarks() {
  const bookmarks = getAllElements('[data-bookmark]')

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('quiz-card__bookmark--active')
    })
  })
}
