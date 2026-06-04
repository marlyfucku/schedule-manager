import DayTable from './components/DayTable.jsx'
import { addWindows, sortLessonsByDays } from '../../lib/helpers/sortHelpers.js'
import styles from './LessonsPage.module.css'
import BreadCrumbs from '../../components/BreadCrumbs.jsx'
import { fetchLessons } from '../../lib/api.js'
import PageNavigation from '../../components/PageNavigation.jsx'
import { parseUrl } from '../../lib/helpers/urlHelpers.js'

export default async function LessonsPage() {
  const { category } = parseUrl(window.location.href)
  const lessons = await fetchLessons(category)
  console.log(lessons);
  const group = lessons[0].group_name
  const sortedLessons = sortLessonsByDays(lessons)
  const days = Object.keys(sortedLessons)
  const breadcrumbs = [
    {
      type: 'ref', href: `/public/${category}`,
      text: category === 'teachers' ? 'Преподаватели' : 'Группы',
    },
    { text: category === 'teachers' ? lessons[0].teachers[0].fio : group },
  ]

  return (
    <div>
      <BreadCrumbs crumbs={breadcrumbs} />
      <PageNavigation />
      <div class={styles.scheduleDashboard}>
        <div class={styles.scheduleGrid}>
          {days.map(day => <DayTable lessons={addWindows(sortedLessons[day])} startDate={11} />)}
        </div>
      </div>
    </div>
  )
}