const { getListStudents, getListStudentIds, getStudentsByLocation, getStudentIdsSum, updateStudentGradeByCity, createInt8TypedArray, setFromArray } = require("./3-get_ids_sum.js");

console.log(getListStudents()); // Checks the list of students
console.log(getListStudentIds(getListStudents())); // Checks student IDs
console.log(getStudentsByLocation(getListStudents())); // Checks students
console.log(getStudentIdsSum(getListStudents())); // Checks the sum of student IDs
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 1, grade: 90 }, { studentId: 2, grade: 85 }])); // Checks the updated grades 
console.log(createInt8TypedArray(10, 2, 42)); // Checks the creation of Int8TypedArray
console.log(setFromArray([1, 2, 3, 4, 5])); // Checks the creation of Set from array
