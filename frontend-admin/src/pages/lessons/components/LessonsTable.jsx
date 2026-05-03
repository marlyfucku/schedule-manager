import { daysMap } from '../../../utils/lessons';
import styles from './LessonsTable.module.css'
import TableCell from './TableCell';

export default function LessonsTable({ lessons, groups, schedule }) {
  const { weekdays, lessonsInDay } = schedule
  console.log(schedule);
  const days = ['понедельник', 'вторник', "среда", "четверг", "пятница", "суббота", "воскресенье"]
console.log(weekdays);
  return (
    <table class={styles.table}>
      <thead>
        <tr>
          <th>Группа</th>
          {weekdays.map((day, idx) => (
            <th>{daysMap[day]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {groups.map((group) => (
          <tr>
            <td>{group.name}</td>
            {weekdays.map((day, idx) => (
              <TableCell lessonsInDay={lessonsInDay}/>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}