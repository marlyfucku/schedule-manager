export function getMondayDate(offset = 0) {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? 6 : day - 1;

  today.setDate(today.getDate() - diff + (offset * 7));

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const dayOfMonth = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${dayOfMonth}`;
}

export const getWeekRange = (date) => {
  const start = new Date(date);
  const dayOfWeek = start.getDay();
  const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  const monday = new Date(start);
  monday.setDate(start.getDate() - diffToMonday);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const format = (d) => d.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return `${format(monday)} - ${format(sunday)}`;
};

export function calcDate(startOfWeek, dayOfWeek) {
  const result = new Date(startOfWeek);
  result.setDate(result.getDate() + (dayOfWeek - 1));
  const day = String(result.getDate()).padStart(2, '0');
  const month = String(result.getMonth() + 1).padStart(2, '0');
  const year = result.getFullYear();

  return `${day}.${month}.${year}`;
}

export function calcWindow(endTime, startTime) {
  function toMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const endMinutes = toMinutes(endTime);
  const startMinutes = toMinutes(startTime);
  const breakMinutes = startMinutes - endMinutes;

  const hours = Math.floor(breakMinutes / 60);
  const minutes = breakMinutes % 60;

  return `${hours} ч. ${minutes} минут`;
}
