import { handlers } from '../../core/init'
import Modal from '../../../src/components/ui/Modal'
import styles from './Page.module.css'

export default async function Teachers() {
  async function fetchTeachers() {
    try {
      const response = await fetch('/apiv1/teachers')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      return data
    }
    catch (error) {
      console.error('Fetch error:', error)
    }
  }
  const teachers = await fetchTeachers()

  const onClick = () => {
    const modal = document.querySelector('.modal-teachers')
    modal.classList.remove('hidden')
  }
  const id = handlers.getId()
  handlers[id] = onClick

  return `
  <h1 class="${styles.title}">Преподаватели</h1>
    <table class="${styles.table}">
      <thead>
        <tr>
          <th>Преподаватель</th>
          <th>Сокращение</th>
          <th>Должность</th>
          <th>Цвет</th>
        </tr>  
      </thead>
      <tbody>
        ${teachers.map(teacher => `<tr>
          <td>${teacher.name}</td>
          <td>${teacher.fio}</td>
          <td>${teacher.position}</td>
          <td>${teacher.color}</td>
        </tr>`).join('')} 
      </tbody>
    </table>
    <button data-id=${id}>Добавить преподавателя</button>
  ${Modal('modal-teachers')}
    `
}
