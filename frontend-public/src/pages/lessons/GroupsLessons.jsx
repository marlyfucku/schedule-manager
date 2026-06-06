import DayTable from './components/DayTable.jsx'
import { addWindows, sortLessonsByDays } from '../../lib/helpers/sortHelpers.js'
import styles from './LessonsPage.module.css'
import BreadCrumbs from '../../components/BreadCrumbs.jsx'
import { fetchLessons } from '../../lib/api.js'
import PageNavigation from '../../components/PageNavigation.jsx'
import { parseUrl } from '../../lib/helpers/urlHelpers.js'

export default async function GroupsLessons() {
  const { category } = parseUrl(window.location.href)
  const lessons = await fetchLessons(category)
  console.log(lessons[0], 2);
  const { group_name, start_date } = lessons[0]
  const sortedLessons = sortLessonsByDays(lessons)
  const days = Object.keys(sortedLessons)
  const breadcrumbs = [
    {
      type: 'ref', href: `/public/groups`,
      text: 'Группы',
    },
    { text: group_name },
  ]

  return (
    <div>
      <BreadCrumbs crumbs={breadcrumbs} />
      <PageNavigation startDate={start_date}/>
      <div class={styles.scheduleDashboard}>
        <div class={styles.scheduleGrid}>
          {days.map(day => <DayTable lessons={addWindows(sortedLessons[day])} startDate={start_date} />)}
        </div>
      </div>
    </div>
  )
}