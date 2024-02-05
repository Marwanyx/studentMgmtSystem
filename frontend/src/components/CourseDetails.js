import { useCoursesContext } from '../hooks/useCoursesContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetails = ({ course }) => {
  const { dispatch } = useCoursesContext()

  const handleClick = async () => {
    const response = await fetch('/api/courses/' + course._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_COURSE', payload: json})
    }
  }

  return (
    <div className="course-details">
      <h4>{course.courseName}</h4>
      <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default CourseDetails