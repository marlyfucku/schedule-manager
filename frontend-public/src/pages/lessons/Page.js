import DayTable from './components/DayTable'
import { addWindows, sortLessonsByDays } from '../../lib/helpers/sortHelpers'
import styles from './Page.module.css'
import BreadCrumbs from '../../components/BreadCrumbs'
import { fetchLessons } from '../../lib/data'
import PageNavigation from '../../components/PageNavigation'

export default async function Page() {
  const resource = new URL(window.location).pathname.split('/')[2]
  const { startDate, lessons } = await fetchLessons(resource)
  const sortedLessons = sortLessonsByDays(lessons)
  const days = Object.keys(sortedLessons)
  const teacher = lessons[0].teachers[0].fio
  const breadcrumbs = [{ type: 'ref', href: `/public/${resource}`, text: resource === 'teachers' ? 'Преподаватели' : 'Группы' }, { text: teacher }]

  return `
  ${BreadCrumbs(breadcrumbs)}
  ${PageNavigation()}
    <div class=${styles.scheduleDashboard}>
      <div class=${styles.scheduleGrid}>
        ${days.map(day => DayTable({ lessons: addWindows(sortedLessons[day]), startDate })).join('\n')}
      </div>
    </div>
  `
}
