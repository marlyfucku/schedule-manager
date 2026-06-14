import { render } from '../../../../core/render';
import { refreshPage } from '../../../../core/router';
import store from '../../../../state/store';
import { deleteWorkload } from '../../../../api/workloads';
import { ui } from '../../../../utils/dom';
import InfoSection from '../InfoSection';
import styles from './Workload.module.css'
import { setLessonsUiState } from '../../../../state/storeHelpers';

export default function Workload({ workload }) {
  console.log(111, store.ui.lessons.status);
  const handleDeleteWorkload = async () => {
    const result = await deleteWorkload(workload.workloadId)
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
  const unselectWorkload = () => {
    store.ui.lessons.selectedGroup = null
    store.ui.lessons.selectedWorkload = null
    store.ui.lessons.workloadId = null
    setLessonsUiState('idle')
    refreshPage()
  }

  const selectWorkload = () => {
    store.ui.lessons.selectedGroup = workload.groupId
    store.ui.lessons.selectedWorkload = workload
    store.ui.lessons.workloadId = workload.workloadId
    setLessonsUiState('workloadSelected')
    refreshPage()
  }

  const handleWorkloadClick = () => {
    store.ui.lessons.status !== 'workloadSelected' 
      ? selectWorkload()
      : unselectWorkload()
  }

  const onMouseEnter = () => {
    render("#infoSection", <InfoSection scheduleItem={workload} />)
  }
  const onMouseLeave = () => {
    render("#infoSection", <InfoSection />)
  }

  return (
    <div class={store.ui.lessons.workloadId === workload.workloadId ? `${styles.workload} ${styles.active}` : `${styles.workload}` } onMouseEnter = { onMouseEnter }
  onMouseLeave = { onMouseLeave } onClick = { handleWorkloadClick } onContextMenu = { handleContextMenu } >
      <div class={styles.subjectName}>{workload.subjectAbbr}</div>
      <div class={styles.divider}></div>
      <div class={styles.workloadsCount}>{workload.lessonsPerWeek}</div>
    </div >
  )
}
