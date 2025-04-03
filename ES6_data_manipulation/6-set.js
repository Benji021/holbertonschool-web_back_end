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
  // Création d'une variable locale pour éviter la modification du paramètre
  const filteredStudents = city
    ? students.filter((student) => student.location === city)
    : students;

  // Additionner les IDs des étudiants
  return filteredStudents.reduce((sum, student) => sum + student.id, 0);
}

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}

function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  int8View[position] = value;

  return buffer;
}

function setFromArray(arr) {
  return new Set(arr);
}

// Export des fonctions
module.exports = { 
  getListStudents, 
  getListStudentIds, 
  getStudentsByLocation, 
  getStudentIdsSum, 
  updateStudentGradeByCity, 
  createInt8TypedArray, 
  setFromArray, 
};
