import styles from '../../pages.module.css'
import { handlers } from '../../../core/handlers'
import { render } from '../../../core/render'
import GroupsPage from '../GroupsPage'
import { updateGroup } from '../../../api/groups'
import { ui } from '../../../utils/dom'

export default function UpdateGroupForm({ group }) {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      yearOfAdmission: formData.get('yearOfAdmission'),
      color: formData.get('color'),
      id: group.id,
    }
    const result = await updateGroup(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <GroupsPage />)
  }

  return (
    <form class={styles.form} onSubmit={onSubmit} id="updateGroupForm">
      <h3>Редактировать группу</h3>
      <div>
        <label htmlFor="name">ФИО</label>
        <input type="text" id="name" name="name" placeholder="ФИО" required value={group.name} />
      </div>
      <div>
        <label htmlFor="yearOfAdmission">Сокращение</label>
        <input type="text" id="yearOfAdmission" name="yearOfAdmission" placeholder="Сокращение" required value={group.yearOfAdmission} />
      </div>
      <div>
        <label htmlFor="abbreviation">Должность</label>
        <input type="text" id="abbreviation" name="abbreviation" placeholder="Должность" value={group.abbreviation} />
      </div>
      <div>
        <label>Цвет</label>
        <div>
          <label><input type="radio" name="color" value="red" checked={group.color === 'red'} /><span style="background:red; width:20px; height:20px; display:inline-block;"></span></label>
          <label><input type="radio" name="color" value="orange" checked={group.color === 'orange'} /><span style="background:orange; width:20px; height:20px; display:inline-block;"></span></label>
          <label><input type="radio" name="color" value="yellow" checked={group.color === 'yellow'} /><span style="background:yellow; width:20px; height:20px; display:inline-block;"></span></label>
          <label><input type="radio" name="color" value="green" checked={group.color === 'green'} /><span style="background:green; width:20px; height:20px; display:inline-block;"></span></label>
          <label><input type="radio" name="color" value="blue" checked={group.color === 'blue'} /><span style="background:blue; width:20px; height:20px; display:inline-block;"></span></label>
          <label><input type="radio" name="color" value="cyan" checked={group.color === 'cyan'} /><span style="background:cyan; width:20px; height:20px; display:inline-block;"></span></label>
          <label><input type="radio" name="color" value="violet" checked={group.color === 'violet'} /><span style="background:violet; width:20px; height:20px; display:inline-block;"></span></label>
        </div>
      </div>
      <button type="submit">Редактировать</button>
    </form>
  )
}
