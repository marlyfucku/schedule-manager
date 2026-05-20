import { render } from '../../../../core/render';
import { refreshPage } from '../../../../core/router';
import store from '../../../../state/store';
import { deleteWorkload } from '../../../../api/workloads';
import { ui } from '../../../../utils/dom';
import InfoSection from '../InfoSection';
import styles from './Pair.module.css'

export default function Workload({ workload }) {

  const handleDeleteWorkload = async () => {
    const result = await deleteWorkload(workload.id)
    ui.showFlashMessage(result)
    refreshPage()
  }
  const handleContextMenu = (e) => {
    ui.showCustomMenu(e.clientX, e.clientY, [
      {
        label: 'Удалить',
        variant: 'danger',
        onClick: handleDeleteWorkload,
      },
    ])
  }
  const selectPair = () => {
    store.ui.selectedGroup = workload.groupId
    store.ui.selectedWorkload = workload
    store.ui.workloadId = workload.id
    refreshPage()
  }
  const onMouseEnter = () => {
    render("#infoSection", <InfoSection workload={workload} />)
  }
  const onMouseLeave = () => {
    render("#infoSection", <InfoSection />)
  }

  return (
    <div class={store.ui.workloadId === workload.id ? `${styles.pair} ${styles.active}` : `${styles.pair}` } onMouseEnter = { onMouseEnter }
  onMouseLeave = { onMouseLeave } onClick = { selectPair } onContextMenu = { handleContextMenu } >
      <div class={styles.subjectName}>{workload.subjectAbbr}</div>
      <div class={styles.divider}></div>
      <div class={styles.workloadsCount}>{workload.lessonsPerWeek}</div>
    </div >
  )
}
