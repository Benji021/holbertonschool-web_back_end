const { getListStudents } = require("./3-get_ids_sum.js");
const { getListStudentIds } = require("./3-get_ids_sum.js");
const { getStudentsByLocation } = require("./3-get_ids_sum.js");
const { getStudentIdsSum } = require("./3-get_ids_sum.js");

console.log(getListStudents()); // Checks the list of students
console.log(getListStudentIds(getListStudents())); // Checks student IDs
console.log(getStudentsByLocation(getListStudents(), "San Francisco")); // Checks students in San Francisco
console.log(getStudentIdsSum(getListStudents())); // Checks the sum of student IDs in San Francisco