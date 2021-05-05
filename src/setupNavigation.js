import getAllElements from './utils/getAllElements'
import getElement from './utils/getElement'

export default function setupNavigation() {
  const pages = getAllElements('[data-page]')
  const buttons = getAllElements('[data-nav]')
  const header = getElement('[data-page-header]')

  buttons.forEach(setupButton)

  function setupButton(button) {
    const buttonName = button.dataset.nav
    const buttonHeader = button.dataset.headerText

    button.addEventListener('click', () => {
      changePage(buttonName)
      changeButton(buttonName)
      changeHeader(buttonHeader)
    })
  }

  function changeHeader(text) {
    header.innerText = text
  }

  function changeButton(buttonName) {
    buttons.forEach(button => {
      const activeButton = button.dataset.nav
      button.classList.toggle('active', activeButton === buttonName)
    })
  }

  function changePage(buttonName) {
    pages.forEach(page => {
      const pageName = page.dataset.page
      page.classList.toggle('hidden', pageName !== buttonName)
    })
  }
}
