import PageTitle from '../../shared/PageTitle'
import styles from '../pages.module.css'

export default function PageHeader({ title, buttonText, onAdd }) {
  return (
    <div class={styles.crudHeader}>
      <PageTitle title={title} />
      <button class={styles.addButton} onClick={onAdd}>
        {buttonText}
      </button>
    </div>
  )
}
