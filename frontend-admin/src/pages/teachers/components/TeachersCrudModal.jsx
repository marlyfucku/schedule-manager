import styles from './TeachersCrudModal.module.css'
import { handlers, registerHandler } from '../../../core/handlers'
import { createTeacher } from '../../../lib/actions'
import render from '../../../core/render'
import Page from '../Page'

export default function TeachersCrudModal() {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = {
      fio: formData.get('fio'),
      abbr: formData.get('abbr'),
      position: formData.get('position'),
    }
    const result = await createTeacher(data)
    handlers.closeModal('.teachersCrudModal')
    handlers.showFlashMessage(result)
    render('#main', <Page/>)
  }

  const onClose = () => {
    handlers.closeModal('.teachersCrudModal')
  }

  const closeBtnId = registerHandler(onClose)
  const formId = registerHandler(onSubmit)

  return (
    <div class="modal-overlay hidden teachersCrudModal">
      <div class="modal">
        <button data-id={closeBtnId} class="modal-close" type="button" aria-label="Закрыть">&times;</button>
        <form class={styles.modal} data-id={formId}>
          <h3>Добавить преподавателя</h3>
          <input type="text" name="fio" placeholder="ФИО" required/>
          <input type="text" name="abbr" placeholder="Сокращение" required/>
          <input type="text" name="position" placeholder="Должность" />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  )
}