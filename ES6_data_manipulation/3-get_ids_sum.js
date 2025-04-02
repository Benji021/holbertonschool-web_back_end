function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }, // Trailing comma added
  ];
}

function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id); // Parentheses added around student
}

function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === city); // Parentheses added around student
}

function getStudentIdsSum(students, city) {
  if (!Array.isArray(students)) {
    return 0;
  }
  
  // Filter students by location if city is provided
  let filteredStudents = students; // New variable instead of reassigning 'students'
  if (city) {
    filteredStudents = filteredStudents.filter((student) => student.location === city); // Parentheses added around student
  }
  
  // Add the IDs of the students
  return filteredStudents.reduce((sum, student) => sum + student.id, 0);
}

// Export the function
module.exports = { getListStudents, getListStudentIds, getStudentsByLocation, getStudentIdsSum };
