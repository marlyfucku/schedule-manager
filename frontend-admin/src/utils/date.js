export const getWeekRange = (startDate) => {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  const format = date => date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return `${format(start)} - ${format(end)}`;
};

export const isPublicationsFresh = (publications, schedules) => publications
  .find(({ schedule_id, published_at }) => {
    const schedule = schedules.find(({ id }) => id === schedule_id);
    return new Date(published_at) < new Date(schedule.updated_at);
  });
