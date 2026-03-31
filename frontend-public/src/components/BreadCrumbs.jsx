import styles from './BreadCrumbs.module.css'
import { h } from '../../h.js'

export default function BreadCrumbs({ crumbs }) {
  console.log(crumbs);
  return (
    <div class={styles.breadcrumbs}>
      <a href="/public">Расписание занятий</a>
      {crumbs.map((crumb) => (
        <div>
          <span class={styles.slash}>/</span>
          {crumb.type === 'ref'
            ? <a href={crumb.href}>{crumb.text}</a>
            : <span>{crumb.text}</span>
          }
        </div>
      ))}
    </div>
  )
}