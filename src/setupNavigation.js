import getElement from './utils/getElement'

export default function setupNavigation() {
  const buttonHome = getElement('[data-button-home]')
  const buttonBookmark = getElement('[data-button-bookmarks]')
  const buttonCreate = getElement('[data-button-create')
  const buttonProfile = getElement('[data-button-profile]')

  const pageHome = getElement('[data-page-home]')
  const pageBookmarks = getElement('[data-page-bookmarks]')
  const pageCreate = getElement('[data-page-create]')
  const pageProfile = getElement('[data-page-profile]')

  const pageHeaderHome = getElement('[data-header-home]')
  const pageHeaderBookmarks = getElement('[data-header-bookmarks]')
  const pageHeaderCreate = getElement('[data-header-create]')
  const pageHeaderProfile = getElement('[data-header-profile]')

  buttonHome.addEventListener('click', () => {
    pageHome.classList.remove('hidden')
    pageBookmarks.classList.add('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.add('hidden')

    pageHeaderHome.classList.remove('hidden')
    pageHeaderBookmarks.classList.add('hidden')
    pageHeaderCreate.classList.add('hidden')
    pageHeaderProfile.classList.add('hidden')

    buttonHome.classList.add('active')
    buttonBookmark.classList.remove('active')
    buttonCreate.classList.remove('active')
    buttonProfile.classList.remove('active')
  })

  buttonBookmark.addEventListener('click', () => {
    pageHome.classList.add('hidden')
    pageBookmarks.classList.remove('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.add('hidden')

    pageHeaderHome.classList.add('hidden')
    pageHeaderBookmarks.classList.remove('hidden')
    pageHeaderCreate.classList.add('hidden')
    pageHeaderProfile.classList.add('hidden')

    buttonHome.classList.remove('active')
    buttonBookmark.classList.add('active')
    buttonCreate.classList.remove('active')
    buttonProfile.classList.remove('active')
  })

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('hidden')
    pageBookmarks.classList.add('hidden')
    pageCreate.classList.remove('hidden')
    pageProfile.classList.add('hidden')

    pageHeaderHome.classList.add('hidden')
    pageHeaderBookmarks.classList.add('hidden')
    pageHeaderCreate.classList.remove('hidden')
    pageHeaderProfile.classList.add('hidden')

    buttonHome.classList.remove('active')
    buttonBookmark.classList.remove('active')
    buttonCreate.classList.add('active')
    buttonProfile.classList.remove('active')
  })

  buttonProfile.addEventListener('click', () => {
    pageHome.classList.add('hidden')
    pageBookmarks.classList.add('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.remove('hidden')

    pageHeaderHome.classList.add('hidden')
    pageHeaderBookmarks.classList.add('hidden')
    pageHeaderCreate.classList.add('hidden')
    pageHeaderProfile.classList.remove('hidden')

    buttonHome.classList.remove('active')
    buttonBookmark.classList.remove('active')
    buttonCreate.classList.remove('active')
    buttonProfile.classList.add('active')
  })
}
