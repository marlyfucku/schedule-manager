import { getMondayDate } from './helpers/date';
import { parseUrl } from './helpers/urlHelpers';

const toCamelLesson = lesson => ({
  weekday: lesson.weekday,
  lessonNumber: lesson.lesson_number,
  startTime: lesson.start_time,
  endTime: lesson.end_time,
  subjectName: lesson.subject_name,
  teacherName: lesson.teacher_name,
  groupName: lesson.group_name,
});

export async function fetchTeachers() {
  try {
    const response = await fetch('/apiv1/teachers');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('cannot connect to server', { cause: error });
  }
}

export async function fetchGroups() {
  try {
    const response = await fetch('/apiv1/groups');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw new Error('cannot connect to server', { cause: error });
  }
}

export async function fetchLessons(category) {
  const { id } = parseUrl(window.location.href);
  const date = new URL(window.location.href).searchParams.get('date') || getMondayDate();
  try {
    const response = await fetch(`/apiv1/${category}/lessons?id=${id}&date=${date}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return { date, ...data, lessons: data.lessons.map(toCamelLesson) };
  }
  catch (error) {
    console.error('Fetch error:', error);
  }
}
