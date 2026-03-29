import BreadCrumbs from '../../components/BreadCrumbs'
import Title from '../../components/Title'
import { fetchGroups } from '../../lib/data'
import Group from './components/Group'

export default async function Groups() {
  const groups = await fetchGroups()
  console.log(1, groups)

  return `
      ${BreadCrumbs([{ type: 'ref', href: '/public/groups', text: 'Группы' }])}
      ${Title('Группы')}
      ${groups.map(group => Group(group)).join('')}
  `
}
