import { fetchLessonsByScheduleId } from '../../api/lessons';
import PageTitle from '../../shared/PageTitle';
import LessonsTable from './components/LessonsTable';

export default async function LessonsPage() {
  const { pathname } = new URL(window.location.href)
  const [root, adminRoute, lessonsRoute, scheduleId] = pathname.split('/')
  
  const { schedule, lessons, groups, subjects, teachers } = await fetchLessonsByScheduleId(scheduleId);
  
  if (!schedule) {
    return <div>Расписание не найдено</div>;
  }

  return (
    <div class="content">
      <PageTitle title={`Уроки: ${schedule.name}`} />
      <LessonsTable
        lessons={lessons}
        groups={groups}
        schedule={schedule}
      />
    </div>
  );
}