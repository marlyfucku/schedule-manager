import { redirect } from '../core/router'
import { getMondayDate, getWeekRange } from '../lib/helpers/date'
import styles from './PageNavigation.module.css'

export default function PageNavigation({ category, date, id }) {
  const weekRange = getWeekRange(date)
  const goToPrevWeek = () => {
    const newWeek = getMondayDate(date, -1)
    redirect(`/public/${category}/${id}/lessons?date=${newWeek}`)
  }
  const goToNextWeek = () => {
    const newWeek = getMondayDate(date, 1)
    redirect(`/public/${category}/${id}/lessons?date=${newWeek}`)
  }

  return (
    <div class={styles.navigation}>
      <btn class={styles.button} onClick={goToPrevWeek}>Предыдущая неделя</btn>
      <div class={styles.date}>{weekRange}</div>
      <btn class={styles.button} onClick={goToNextWeek}>Следующая неделя</btn>
    </div>
  )
}