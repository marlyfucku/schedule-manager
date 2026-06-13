import { setLesson } from '../../../../api/lessons.js';
import { decrementWorkload } from '../../../../api/workloads.js';
import { render } from '../../../../core/render.js';
import { refreshPage } from '../../../../core/router.js';
import store from '../../../../state/store.js';
import { ui } from '../../../../utils/dom.js';
import { lessonsToArray } from '../../../../utils/lessons.js';
import InfoSection from '../InfoSection.jsx';
import styles from './LessonsTable.module.css'

export default function TableRow({ lessons, weekday, group }) {
  const lessonsCopy = structuredClone(lessons)
  
  const selectLesson = (lesson) => {
    // если клик происходит при выделенной нагрузке, то назначаем нагрузку
    if (store.ui.selectedWorkload) return;
   
    // если клик происходит при выделенном уроке, то переносим урок
    lessonsCopy.forEach((lessonCopy) => {
      if (lesson.workloadId === lessonCopy.workloadId){
        console.log(1222);
      }
    })
  }

  
  const handleClick = async (lesson) => { 
    console.log(1);   
    if (!store.ui.selectedWorkload && !lesson.workloadId) return;
    console.log(11, store.ui);
    selectLesson(lesson)


    if (store.ui.selectedGroup !== group.id) return;
    console.log(2);

    const { lessonNumber } = lesson
    const result = await setLesson({ ...store.ui.selectedWorkload, lessonNumber, scheduleId: store.currentScheduleId, weekday })
    if (result.type === 'success') decrementWorkload(store.ui.selectedWorkload.workloadId);
    ui.showFlashMessage(result)
    refreshPage()
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
        {lessonsCopy.map((lesson, index) => (
          <div class={`${styles.pairSlot} ${lesson.style}`} onMouseEnter={() => showLessonInfo(lesson)} onMouseLeave={() => clearLessonInfo(lesson)} onClick={(e) => handleClick(lesson)}>
            <span class={styles.pairText} title={lesson.text}>{lesson.text}</span>
          </div>
        ))}
      </div>
    </td>
  )
}
