import styles from './Group.module.css'

export default function Group(group) {
  return `<a href="${`/public/groups/${group.id}/lessons`}"><h5 class=${styles.groupName}>${group.name}</h5></a>`
}
