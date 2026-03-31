import BreadCrumbs from '../../components/BreadCrumbs.jsx'
import Title from '../../components/Title.jsx'
import { fetchTeachers } from '../../lib/data.js'
import TeacherName from './components/Teacher.jsx'
import { h } from '../../../h.js'

export default async function Teachers() {
  const teachers = await fetchTeachers()

  return (
    <div>
      <BreadCrumbs crumbs={[{ type: 'ref', href: '/public/teachers', text: 'Преподаватели' }]} />
      <Title text="Преподаватели" />
      <div>
        {teachers.map(teacher => <TeacherName {...teacher} />)}
      </div>
    </div>
  )
}