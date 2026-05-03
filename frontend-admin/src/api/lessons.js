// api/lessons.js
async function fetchLessonsByScheduleId(scheduleId) {
  try {
    const response = await fetch(`/apiv1/lessons/schedule/${scheduleId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error('Fetch error:', error);
    return { schedule: null, lessons: [], groups: [], subjects: [], teachers: [] };
  }
}

export { fetchLessonsByScheduleId };
