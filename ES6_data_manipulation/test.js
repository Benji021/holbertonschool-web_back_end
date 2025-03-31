const { getListStudents } = require("./2-get_students_by_loc.js");
const { getListStudentIds } = require("./2-get_students_by_loc.js");
const { getStudentsByLocation } = require("./2-get_students_by_loc.js");

console.log(getListStudents()); // Checks the list of students
console.log(getListStudentIds(getListStudents())); // Checks student IDs
console.log(getStudentsByLocation(getListStudents(), "San Francisco")); // Checks students in San Francisco
