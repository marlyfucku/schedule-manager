import styles from './Lesson.module.css'

export default function Lesson(lesson) {
  console.log(111, lesson);
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
        <div>{lesson.start_time}</div>
        <div>{lesson.end_time}</div>
      </td>
      <td class={styles.info}>
        <div class={styles.subject}>{lesson.subject_name}</div>
        <div class={styles.groups}>{lesson.group_name}</div>
      </td>
    </tr>
  )
}