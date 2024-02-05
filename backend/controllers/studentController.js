const Student = require('../models/studentModel')
const mongoose = require('mongoose')

// get all students
const getStudents = async (req, res) => {
  const students = await Student.find({}).sort({createdAt: -1})

  res.status(200).json(students)
}

// get a single student
const getStudent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such student'})
  }

  const student = await Student.findById(id)

  if (!student) {
    return res.status(404).json({error: 'No such student'})
  }

  res.status(200).json(student)
}

// create a new student
const createStudent = async (req, res) => {
  const { firstName, familyName, dateOfBirth } = req.body;

  let emptyFields = [];

  if (!firstName) {
    emptyFields.push('firstName');
  }
  if (!familyName) {
    emptyFields.push('familyName');
  }
  if (!dateOfBirth) {
    emptyFields.push('dateOfBirth');
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
  }

  // Calculate the date 10 years ago from now
  const tenYearsAgo = new Date();
  tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

  // Compare the provided DOB with the date 10 years ago
  if (new Date(dateOfBirth) > tenYearsAgo) {
    return res.status(400).json({ error: 'You must be at least 10 years old' });
  }

  // Add to the database
  try {
    const student = await Student.create({ firstName, familyName, dateOfBirth });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a student
const deleteStudent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such student'})
  }

  const student = await Student.findOneAndDelete({_id: id})

  if(!student) {
    return res.status(400).json({error: 'No such student'})
  }

  res.status(200).json(student)
}

// update a student
const updateStudent = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such student'})
  }

  const student = await Student.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!student) {
    return res.status(400).json({error: 'No such student'})
  }

  res.status(200).json(student)
}

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  deleteStudent,
  updateStudent
}