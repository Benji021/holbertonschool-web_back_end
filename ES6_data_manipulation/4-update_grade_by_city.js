function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}

function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}

function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.filter((student) => student.location === city);
}

function getStudentIdsSum(students, city) {
  if (!Array.isArray(students)) {
    return 0;
  }
  // Filter students by location if city is provided
  let filteredStudents = students;
  if (city) {
    filteredStudents = students.filter((student) => student.location === city);
  }
  // Add the IDs of the students
  return filteredStudents.reduce((sum, student) => sum + student.id, 0);
}

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj
          ? gradeObj.grade
          : 'N/A', // Moved this line to a new line to respect max-len
      };
    });
}

// Example usage:
module.exports = { 
  getListStudents,
  getListStudentIds,
  getStudentsByLocation,
  getStudentIdsSum,
  updateStudentGradeByCity,
};
