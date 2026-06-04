import PageTitle from '../../shared/PageTitle'
import pages from '../pages.module.css'
import styles from './PublicationPage.module.css'
import { deletePublications, fetchPublications, publishSchedules } from '../../api/publications.js'
import { refreshPage } from '../../core/router.js'
import { ui } from '../../utils/dom.js'
import { getWeekRange, isPublicationsFresh } from '../../utils/date.js'
import { fetchSchedules } from '../../api/schedules.js'

export default async function PublicationPage() {
  const publications = await fetchPublications()
  const schedules = await fetchSchedules()

  const publishPeriodSchedules = async () => {
    const result = await publishSchedules()
    ui.showFlashMessage(result)
    refreshPage()
  }

  const removePeriodSchedules = async () => {
    const result = await deletePublications()
    ui.showFlashMessage(result)
    refreshPage()
  }

  return (
    <div class={`content ${pages.crudPage}`}>
      <div class={pages.crudHeader}>
        <PageTitle title="Публикация расписания" />
        <div class={styles.actionButtons}>
          {publications.length > 0 ? (
            <>
              <button
                class={`${pages.addButton} ${!isPublicationsFresh(publications, schedules) ? styles.disabledButton : ''}`}
                disabled={!isPublicationsFresh(publications, schedules)}
              >
                ОБНОВИТЬ ПУБЛИКАЦИЮ
              </button>
              <button class={`${pages.tableActionButton} ${pages.tableDeleteButton} ${styles.deleteButton}`} onClick={removePeriodSchedules}>УДАЛИТЬ ПУБЛИКАЦИЮ</button>
            </>
          ) : (
            <button class={pages.addButton} onClick={publishPeriodSchedules}>ОПУБЛИКОВАТЬ</button>
          )}
        </div>
      </div>

      <div class={styles.publicationContent}>
        <table class={`${pages.table} ${styles.infoTable}`}>
          <tbody>
            <tr>
              <td>Ссылка на опубликованное расписание</td>
            </tr>
            <tr>
              <td>Дата последней публикации</td>
            </tr>
          </tbody>
        </table>

        <section class={styles.publishedSection}>
          <h2 class={styles.sectionTitle}>Опубликованные расписания</h2>
          <table class={pages.table}>
            <thead>
              <tr>
                <th>Название</th>
                <th>Период</th>
              </tr>
            </thead>
            <tbody>
              {publications.map(publication => (
                <tr>
                  <td>{publication.schedule_name}</td>
                  <td>{getWeekRange(publication.start_date)}</td>
                </tr>
              ))
              }
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}
