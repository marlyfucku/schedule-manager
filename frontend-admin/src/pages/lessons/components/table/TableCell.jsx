import { setLesson } from '../../../../api/lessons.js';
import { refreshPage } from '../../../../core/router.js';
import store from '../../../../state/store.js';
import { ui } from '../../../../utils/dom.js';
import { lessonsToArray } from '../../../../utils/lessons.js';
import styles from './LessonsTable.module.css'

export default function TableCell({ lessons, weekday, group }) {
  const handleClick = async (lesson) => {
    if (!store.ui.selectedWorkload) return;
    if (store.ui.selectedGroup !== group.id) return;
    console.log('click');
    const {lessonNumber} = lesson
    console.log(2, store.ui.selectedWorkload);
    console.log(1, {...store.ui.selectedWorkload, lessonNumber, scheduleId: store.currentScheduleId, weekday});
    const result = await setLesson({...store.ui.selectedWorkload, lessonNumber, scheduleId: store.currentScheduleId, weekday})
    ui.showFlashMessage(result)
    refreshPage()
  }

  // const pairsInDay = lessonsToArray(lessonsInDay)
  return (
    <td>
      <div class={styles.pairsContainer}>
        {lessons.map((lesson, index) => (
          <div class={`${styles.pairSlot} ${lesson.style}`} onClick={(e) => handleClick(lesson)}>{lesson.text}</div>
        ))}
      </div>
    </td>
  )
}
