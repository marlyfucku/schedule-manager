export const ui = {
  openModal: (modalId) => {
    document.getElementById(modalId).classList.add('show')
  },

  closeModal: () => {
    document.querySelector('.show').classList.remove('show')
  },

  showFlashMessage: ({ type, message }) => {
    const flashContainer = document.querySelector('.flash-message')
    if (!flashContainer) return

    flashContainer.innerHTML = message
    flashContainer.classList.add('show', type)

    setTimeout(() => {
      flashContainer.classList.remove('show', type)
      flashContainer.innerHTML = ''
    }, 3000)
  },
}
