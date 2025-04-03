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

export default function getStudentIdsSum(students, city) {
  if (!Array.isArray(students)) {
    return 0;
  }

  // Filtrer les étudiants par ville si une ville est fournie
  const filteredStudents = city
    ? students.filter((student) => student.location === city)
    : students;

  // Ajouter les IDs des étudiants
  return filteredStudents.reduce(
    (sum, student) => sum + student.id,
    0,
  );
}
