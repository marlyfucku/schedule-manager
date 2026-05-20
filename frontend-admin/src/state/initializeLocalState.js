import { fetchSchedules } from '../api/schedules';
import store from './store';

export async function initializeLocalState() {
  if (store.currentScheduleId !== null) {
    return;
  }

  const schedules = await fetchSchedules();

  if (schedules.length === 0) {
    return;
  }

  store.currentScheduleId = schedules[0].id;
}
