import { handlers } from '../../core/init'
import Router from '../../core/router'
import render from '../../core/render'

export default function SidebarCategory(category) {
  const content = Router.getRoute(category)
  console.log('content', content)

  const onClick = async () => {
    render(document.querySelector('.main'), await content)
  }
  const id = handlers.getId()
  handlers[id] = onClick
  return `<li data-id=${id} class='sidebar-category'>${category}</li>`
}
