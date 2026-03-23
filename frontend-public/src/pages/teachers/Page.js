import { fetchTeachers } from '../../lib/data'
import TeacherName from './components/Teacher'

export default async function Teachers() {
  const teachers = await fetchTeachers()

  const teachersElements = teachers.map(teacher => TeacherName(teacher)).join('\n')
  return `<div>${teachersElements}</div>`
}
