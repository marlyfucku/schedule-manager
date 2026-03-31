import styles from './LessonRow.module.css'
import { h } from '../../../../h.js'

export default function Lesson(lesson) {
  if (lesson.type === 'window') {
    return (
      <tr>
        <td class={styles.time}></td>
        <td class={styles.info}>
          <div class={styles.window}>Окно: {lesson.totalTime}</div>
        </td>
      </tr>
    )
  }

  return (
    <tr>
      <td class={styles.time}>
        <div>{lesson.startTime}</div>
        <div>{lesson.endTime}</div>
      </td>
      <td class={styles.info}>
        <div class={styles.subject}>{lesson.subject.name}</div>
        <div class={styles.groups}>{lesson.unionGroups.map(({ group }) => group.name).join(', ')}</div>
      </td>
    </tr>
  )
}