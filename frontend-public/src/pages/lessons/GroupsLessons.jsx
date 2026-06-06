import DayTable from './components/DayTable.jsx'
import { addWindows, sortLessonsByDays } from '../../lib/helpers/sortHelpers.js'
import styles from './LessonsPage.module.css'
import BreadCrumbs from '../../components/BreadCrumbs.jsx'
import { fetchLessons } from '../../lib/api.js'
import PageNavigation from '../../components/PageNavigation.jsx'
import { parseUrl } from '../../lib/helpers/urlHelpers.js'

export default async function GroupsLessons() {
  const { category } = parseUrl(window.location.href)
  const { lessons, group, date }  = await fetchLessons(category)
  console.log(lessons, group, date);
  const sortedLessons = sortLessonsByDays(lessons)
  const days = Object.keys(sortedLessons)
  const breadcrumbs = [
    {
      type: 'ref', href: `/public/groups`,
      text: 'Группы',
    },
    { text: group.name },
  ]

  return (
    <div>
      <BreadCrumbs crumbs={breadcrumbs} />
      <PageNavigation date={date} category={'groups'} id={group.id}/>
      <div class={styles.scheduleDashboard}>
        <div class={styles.scheduleGrid}>
          {days.map(day => <DayTable lessons={addWindows(sortedLessons[day])} startDate={date} />)}
        </div>
      </div>
    </div>
  )
}