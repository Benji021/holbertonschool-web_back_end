const getListStudents = require("./0-get_list_students.js");
const { getListStudents, getListStudentIds } = require("./1-get_list_student_ids.js");

console.log(getListStudents());
console.log(getListStudentIds(getListStudents()));