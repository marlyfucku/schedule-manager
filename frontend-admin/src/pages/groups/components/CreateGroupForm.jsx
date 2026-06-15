import styles from '../../pages.module.css'
import { handlers, registerSubmit } from '../../../core/handlers'
import { render } from '../../../core/render'
import GroupsPage from '../GroupsPage'
import { createGroup } from '../../../api/groups'
import { ui } from '../../../utils/dom'

export default function CreateGroupForm() {
  const onSubmit = async (e) => {
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      abbreviation: formData.get('abbreviation'),
      yearOfAdmission: formData.get('yearOfAdmission'),
      color: formData.get('color'),
    }
    const result = await createGroup(data)
    ui.closeModal()
    ui.showFlashMessage(result)
    render('#main', <GroupsPage />)
  }

  return (
    <form class={styles.form} onSubmit={onSubmit}>
    <h3>Добавить группу</h3>
    <div>
      <label htmlFor="name">Название группы</label>
      <input type="text" id="name" name="name" placeholder="Название группы" required />
    </div>
    <div>
      <label htmlFor="yearOfAdmission">Год поступления</label>
      <input type="text" id="yearOfAdmission" name="yearOfAdmission" placeholder="Год поступления" required />
    </div>
    <div>
      <label htmlFor="abbreviation">Сокращение</label>
      <input type="text" id="abbreviation" name="abbreviation" placeholder="Сокращение" />
    </div>
    <div>
      <label>Цвет</label>
      <div>
        <label><input type="radio" name="color" value="red" required /><span style="background:red; width:20px; height:20px; display:inline-block;"></span></label>
        <label><input type="radio" name="color" value="orange" /><span style="background:orange; width:20px; height:20px; display:inline-block;"></span></label>
        <label><input type="radio" name="color" value="yellow" /><span style="background:yellow; width:20px; height:20px; display:inline-block;"></span></label>
        <label><input type="radio" name="color" value="green" /><span style="background:green; width:20px; height:20px; display:inline-block;"></span></label>
        <label><input type="radio" name="color" value="blue" /><span style="background:blue; width:20px; height:20px; display:inline-block;"></span></label>
        <label><input type="radio" name="color" value="cyan" /><span style="background:cyan; width:20px; height:20px; display:inline-block;"></span></label>
        <label><input type="radio" name="color" value="violet" /><span style="background:violet; width:20px; height:20px; display:inline-block;"></span></label>
      </div>
    </div>
    <button type="submit">Добавить</button>
  </form>
  )
}
