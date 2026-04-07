import styles from './Page.module.css'
import { fetchTeachers } from '../../lib/data'
import TeachersCrudModal from './components/TeachersCrudModal'
import { DeleteTeacher } from './components/DeleteTeacher'
import { handlers, registerHandler } from '../../core/handlers'
import { deleteTeacher } from '../../lib/actions'
import ModalConfirmAction from '../../components/ModalConfirmAction'
import render from '../../core/render'

export default async function Page() {
  const teachers = await fetchTeachers()
  const showModal = () => {
    handlers.openModal('.teachersCrudModal')
  }
  const id = registerHandler(showModal)
  const action = async () => {
    const deleteTeacherModal = document.querySelector('.deleteTeacherModal')
    const teacherId = deleteTeacherModal.dataset.targetId
    const result = await deleteTeacher(teacherId)
    handlers.closeModal('.deleteTeacherModal')
    handlers.showFlashMessage(result)
    render('#main', <Page />)
  }

  return (
    <div>
      <h1 class={styles.title}>Преподаватели</h1>
      <table class={styles.table}>
        <thead>
          <tr>
            <th>Преподаватель</th>
            <th>Сокращение</th>
            <th>Должность</th>
            <th>Цвет</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr>
              <td>{teacher.name}</td>
              <td>{teacher.fio}</td>
              <td>{teacher.position}</td>
              <td>{teacher.color}</td>
              <td><DeleteTeacher teacherId={teacher.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button data-id={id}>Добавить преподавателя</button>
      <TeachersCrudModal />
      <ModalConfirmAction action={action} text='Подтвердите удаление' className='deleteTeacherModal'/>
    </div>
  )
}