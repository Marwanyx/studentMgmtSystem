import { useState } from 'react'
import { useCoursesContext } from '../hooks/useCoursesContext'

const CourseForm = () => {
  const { dispatch } = useCoursesContext()

  const [courseName, setCourseName] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = {courseName}
    
    const response = await fetch('/api/courses', {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    } else {
      setEmptyFields([])
      setError(null)
      setCourseName('')
      dispatch({type: 'CREATE_COURSE', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Course</h3>

      <label>Course Name:</label>
      <input 
        type="text" 
        onChange={(e) => setCourseName(e.target.value)} 
        value={courseName}
        className={emptyFields.includes('courseName') ? 'error' : ''}
      />

      <button>Add Course</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CourseForm
