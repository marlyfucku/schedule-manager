import { calcWindow } from './date';

export const addWindows = (dayLessons) => {
  const result = [];
  for (let i = 0; i < dayLessons.length - 1; i += 1) {
    const thisLesson = dayLessons[i];
    const nextLesson = dayLessons[i + 1];
    const gap = nextLesson.lesson_number - thisLesson.lesson_number;
    result.push(dayLessons[i]);
    if (gap > 1) {
      result.push({ type: 'window', totalTime: calcWindow(thisLesson.end_time, nextLesson.start_time) });
    }
  }
  return result.concat(dayLessons.at(-1));
};

export const sortLessonsByDays = (lessons) => {
  const weekdays = Array.from(new Set(lessons.map(lesson => lesson.weekday))).sort();
  return weekdays.reduce((acc, day) => {
    const lessonsByDay = lessons.filter(lesson => lesson.weekday === day).sort((a, b) =>
      a.lesson_number - b.lesson_number,
    );
    return { ...acc, [day]: lessonsByDay };
  }, {});
};
