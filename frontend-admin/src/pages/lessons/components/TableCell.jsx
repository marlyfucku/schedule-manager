import { pairsToArray } from '../../../utils/lessons'
import styles from './LessonsTable.module.css'

export default function TableCell({ lessonsInDay }) {
  const pairsInDay = pairsToArray(lessonsInDay)
  return (
    <td>
      <div class={styles.pairsContainer}>
        {pairsInDay.map((lessons) => (
          <div class={styles.pairSlot}>1</div>
        ))}
      </div>
    </td>
  )
}