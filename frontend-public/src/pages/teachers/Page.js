import BreadCrumbs from '../../components/BreadCrumbs'
import Title from '../../components/Title'
import { fetchTeachers } from '../../lib/data'
import TeacherName from './components/Teacher'

export default async function Teachers() {
  const teachers = await fetchTeachers()

  const teachersElements = teachers.map(teacher => TeacherName(teacher)).join('\n')
  return `
    ${BreadCrumbs([{ type: 'ref', href: '/public/teachers', text: 'Преподаватели' }])}
    ${Title('Преподаватели')}
    <div>${teachersElements}</div>
  `
}
