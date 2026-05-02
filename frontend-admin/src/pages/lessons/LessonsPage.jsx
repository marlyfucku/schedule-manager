import { fetchLessons } from "../../api/lessons"

export default async function LessonsPage() {
  const lessons = await fetchLessons()
  console.log(lessons);
  return (
    <div>LessonsPage</div>
  )
}
