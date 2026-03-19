import Calls from '../components/Calls'
import Classes from '../components/Classes'
import Groups from '../components/Groups'
import Subjects from '../components/Subjects'
import Teachers from '../pages/teachers/Page'

export default {
  routes: {
    Звонки: Calls,
    Группы: Groups,
    Предметы: Subjects,
    Преподаватели: Teachers,
    Аудитории: Classes,
  },

  async getRoute(route) {
    if (this.routes[route]) {
      const content = await this.routes[route]()
      return content
    }
    return null
  },
}
