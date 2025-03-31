function getListStudents() {
    return [
      { id: 1, firstName: "Guillaume", location: "San Francisco" },
      { id: 2, firstName: "James", location: "Columbia" },
      { id: 5, firstName: "Serena", location: "San Francisco" }
    ];
  }
  
  function getListStudentIds(students) {
    if (!Array.isArray(students)) {
      return [];
    }
    return students.map(student => student.id);
  }
  
  function getStudentsByLocation(students, city) {
    if (!Array.isArray(students)) {
      return [];
    }
    return students.filter(student => student.location === city);
  }

    // Export the function
module.exports = { getListStudents, getListStudentIds, getStudentsByLocation };