import SidebarCategory from './ui/SidebarCategory.js'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return `<ol class="${styles.sidebar}">
      ${SidebarCategory('Звонки')}
      ${SidebarCategory('Группы')}
      ${SidebarCategory('Предметы')}
      ${SidebarCategory('Преподаватели')}
      ${SidebarCategory('Аудитории')}
    </ol>`
}
