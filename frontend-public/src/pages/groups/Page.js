import { fetchGroups } from '../../lib/data'
import Group from './components/Group'

export default async function Groups() {
  const groups = await fetchGroups()

  return `
    <div>
    <h2>Группы</h2>
      ${groups.map(group => Group(group)).join('')}
    </div>
  `
}
