import { useStudentsContext } from '../hooks/useStudentsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const StudentDetails = ({ student }) => {
  const { dispatch } = useStudentsContext()

  const handleClick = async () => {
    const response = await fetch('/api/students/' + student._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_STUDENT', payload: json})
    }
  }

  return (
    <div className="student-details">
      <h4>{student.firstName}</h4>
      <p><strong>Family Name: </strong>{student.familyName}</p>
      <p><strong>Date of Birth: </strong>{
        student.dateOfBirth.split('T')[0]
      }</p>
      <p>{formatDistanceToNow(new Date(student.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default StudentDetails