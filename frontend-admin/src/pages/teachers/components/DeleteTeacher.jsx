import { handlers, registerHandler } from "../../../core/handlers"

export const DeleteTeacher = ({ teacherId }) => {
  const onClick = () => {
    handlers.openModal('.deleteTeacherModal')
    const deleteTeachersModal = document.querySelector('.deleteTeacherModal')
    deleteTeachersModal.dataset.targetId = teacherId
  }

  const handlerId = registerHandler(onClick)
  
  return (
    <div>
      <button data-id={handlerId}>Удалить</button>
    </div>
  )
}
