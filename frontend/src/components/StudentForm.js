import { useState } from 'react'
import { useStudentsContext } from '../hooks/useStudentsContext'

// Helper function to check age
const checkAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age >= 10;
}

const StudentForm = () => {
  const { dispatch } = useStudentsContext()

  const [firstName, setFirstName] = useState('')
  const [familyName, setFamilyName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Client-side age validation
    if (!checkAge(dateOfBirth)) {
      setError('You must be at least 10 years old');
      return; // Exit early if the age check fails
    }

    const student = {firstName, familyName, dateOfBirth}
    
    const response = await fetch('/api/students', {
      method: 'POST',
      body: JSON.stringify(student),
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
      setFirstName('')
      setFamilyName('')
      setDateOfBirth('')
      dispatch({type: 'CREATE_STUDENT', payload: json})
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Student</h3>

      <label>First Name:</label>
      <input 
        type="text" 
        onChange={(e) => setFirstName(e.target.value)} 
        value={firstName}
        className={emptyFields.includes('firstName') ? 'error' : ''}
      />

      <label>Family Name:</label>
      <input 
        type="text" 
        onChange={(e) => setFamilyName(e.target.value)} 
        value={familyName}
        className={emptyFields.includes('familyName') ? 'error' : ''}
      />

      <label>Date of Birth:</label>
      <input 
        type="date" 
        onChange={(e) => setDateOfBirth(e.target.value)} 
        value={dateOfBirth}
        className={emptyFields.includes('dateOfBirth') ? 'error' : ''}
      />

      <button>Add Student</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default StudentForm
