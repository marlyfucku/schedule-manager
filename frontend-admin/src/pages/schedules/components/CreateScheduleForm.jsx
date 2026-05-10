import pages from '../../pages.module.css'
import styles from './ScheduleForm.module.css'
import { createSchedule } from '../../../api/schedules'
import { render } from '../../../core/render'
import SchedulesPage from '../SchedulesPage'
import { ui } from '../../../utils/dom'

export default function CreateScheduleForm() {
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const weekdays = formData.getAll('weekdays').map(Number)

    const data = {
      name: formData.get('name'),
      lessonsInDay: parseInt(formData.get('lessonsInDay')),
      weekdays: weekdays,
    }
    const result = await createSchedule(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <SchedulesPage />)
  }

  return (
    <form class={pages.form} onSubmit={onSubmit}>
      <h3>Добавить расписание</h3>
      <input type="text" name="name" placeholder="Название расписания" required />
      <input type="number" name="lessonsInDay" placeholder="Количество пар в день" required min="1" max="8" />

      <div class={styles.weekdays}>
        <label><input type="checkbox" checked name="weekdays" value="1" /> Пн</label>
        <label><input type="checkbox" checked name="weekdays" value="2" /> Вт</label>
        <label><input type="checkbox" checked name="weekdays" value="3" /> Ср</label>
        <label><input type="checkbox" checked name="weekdays" value="4" /> Чт</label>
        <label><input type="checkbox" checked name="weekdays" value="5" /> Пт</label>
        <label><input type="checkbox" checked name="weekdays" value="6" /> Сб</label>
        <label><input type="checkbox" checked name="weekdays" value="7" /> Вс</label>
      </div>

      <button type="submit">Добавить</button>
    </form>
  )
}
