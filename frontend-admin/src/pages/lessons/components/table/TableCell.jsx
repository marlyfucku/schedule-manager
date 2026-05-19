import { setLesson } from '../../../../api/lessons.js';
import state from '../../../../state.js';
import { lessonsToArray } from '../../../../utils/lessons.js';
import styles from './LessonsTable.module.css'

export default function TableCell({ lessonsInDay, group, day }) {
  const handleClick = async (e) => {
    if (!state.ui.selectedWorkload) return;
    if (state.ui.selectedGroup !== group.id) return;
    const lessonNumber = e.target.dataset.lessonnumber
    const result = await setLesson({...state.ui.selectedWorkload, lessonNumber, scheduleId: state.currentScheduleId, weekday: day})
    console.log(result);
  }

  const pairsInDay = lessonsToArray(lessonsInDay)
  return (
    <td>
      <div class={styles.pairsContainer}>
        {pairsInDay.map((pair, index) => (
          <div class={styles.pairSlot} data-lessonNumber={`${index + 1}`} onClick={(e) => handleClick(e)}></div>
        ))}
      </div>
    </td>
  )
}