import { setLesson } from '../../../../api/lessons.js';
import { decrementWorkload } from '../../../../api/workloads.js';
import { render } from '../../../../core/render.js';
import { refreshPage } from '../../../../core/router.js';
import store from '../../../../state/store.js';
import { dispatchLessonClick, setLessonsUiState } from '../../../../state/storeHelpers.js';
import { ui } from '../../../../utils/dom.js';
import { lessonsToArray } from '../../../../utils/lessons.js';
import InfoSection from '../InfoSection.jsx';
import styles from './LessonsTable.module.css'

export default function TableRow({ lessons, weekday, group }) {

  const setWorkloadToLessons = async (lesson) => {
    const { lessonNumber } = lesson
    const result = await setLesson({ ...store.ui.lessons.selectedWorkload, lessonNumber, scheduleId: store.currentScheduleId, weekday })
    ui.showFlashMessage(result)
    if (result.type === 'success') {
      const result = await decrementWorkload(store.ui.lessons.selectedWorkload.workloadId);
      if (result.workloadsLeft === 0) {
        store.ui.lessons.status = 'idle'
        store.ui.lessons.selectedGroup = null;
        store.ui.lessons.selectedLesson = null;
        store.ui.lessons.selectedWorkload = null;
      }
    }
    refreshPage()
  }

  const handleLessonClick = async (target, lesson) => {
    if (store.ui.lessons.status === 'workloadSelected') {
      await setWorkloadToLessons(lesson)
      return;
    };
  }

  const showLessonInfo = (lesson) => {
    if (lesson.style !== 'booked') return;
    render("#infoSection", <InfoSection scheduleItem={lesson} />)
  }

  const clearLessonInfo = (lesson) => {
    if (lesson.style !== 'booked') return;
    render("#infoSection", <InfoSection />)
  }

  return (
    <td>
      <div class={styles.pairsContainer}>
        {lessons.map((lesson, index) => (
          <div class={`${styles.pairSlot} ${lesson.style}`} onMouseEnter={() => showLessonInfo(lesson)} onMouseLeave={() => clearLessonInfo(lesson)} onClick={(e) => handleLessonClick(e.target, lesson)}>
            <span class={styles.pairText} title={lesson.text}>{lesson.text}</span>
          </div>
        ))}
      </div>
    </td>
  )
}
