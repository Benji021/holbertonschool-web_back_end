const { getListStudents } = require("./0-get_list_students.js");
const { getListStudentIds } = require("./1-get_list_student_ids.js");

console.log(getListStudents()); // Vérifie la liste des étudiants
console.log(getListStudentIds(getListStudents())); // Vérifie les IDs
