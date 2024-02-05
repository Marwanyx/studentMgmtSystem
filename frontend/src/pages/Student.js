import { useEffect } from "react"
import { useStudentsContext } from "../hooks/useStudentsContext"

// components
import StudentDetails from "../components/StudentDetails"
import StudentForm from "../components/StudentForm"

const Students = () => {
  const { students, dispatch } = useStudentsContext()

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('/api/students')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_STUDENTS', payload: json})
      }
    }

    fetchStudents()
  }, [dispatch])

  return (
    <div className="student">
      <div className="students">
        {students && students.map(student => (
          <StudentDetails student={student} key={student._id} />
        ))}
      </div>
      <StudentForm />
    </div>
  );
}

export default Students;