import { getWeekRange } from '../lib/helpers/date'
import styles from './PageNavigation.module.css'

export default function PageNavigation({ startDate }) {
  const weekRange = getWeekRange(startDate)
  return (
    <div class={styles.navigation}>
      <a class={styles.button}>Предыдущая неделя</a>
      <div class={styles.date}>{weekRange}</div>
      <a class={styles.button}>Следующая неделя</a>
    </div>
  )
}