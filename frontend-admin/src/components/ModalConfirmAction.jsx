import { handlers, registerHandler } from "../core/handlers"

export default function ModalConfirmAction({ action, text, className }) {
  const onClose = () => {
    handlers.closeModal(`.${className}`)
  }
  
  const buttonId = registerHandler(action)
  const closeBtnId = registerHandler(onClose)

  return (
    <div class={`modal-overlay hidden ${className}`}>
      <div class="modal">
        <button data-id={closeBtnId} class="modal-close" type="button" aria-label="Закрыть">&times;</button>
        <button data-id={buttonId}>{text}</button>
      </div>
    </div>)
}