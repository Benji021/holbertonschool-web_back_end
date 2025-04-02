const getListStudents = require("./0-get_list_students.js");
const getListStudentIds = require("./1-get_list_student_ids.js");
const { getStudentsByLocation } = require("./2-get_students_by_loc.js");
const getStudentIdsSum = require("./3-get_student_ids_sum.js");
const updateStudentGradeByCity = require("./4-update_student_grade_by_city.js");
const createInt8TypedArray = require("./5-create_int8_typed_array.js");
const setFromArray = require("./6-set_from_array.js");
const hasValueFromArray = require("./7-has_value_from_array.js");
const cleanSet = require("./8-clean_set.js");
const groceriesList = require("./9-groceries_list.js");
const updateUniqueItems = require("./10-update_unique_items.js");

console.log(getListStudents()); // Checks the list of students
console.log(getListStudentIds(getListStudents())); // Checks student IDs
console.log(getStudentsByLocation(getListStudents())); // Checks students
console.log(getStudentIdsSum(getListStudents())); // Checks the sum of student IDs
console.log(updateStudentGradeByCity(getListStudents(), "San Francisco", [{ studentId: 1, grade: 90 }, { studentId: 2, grade: 85 }])); // Checks the updated grades 
console.log(createInt8TypedArray(10, 2, 42)); // Checks the creation of Int8TypedArray
console.log(setFromArray([1, 2, 3, 4, 5])); // Checks the creation of Set from array
console.log(hasValueFromArray([1, 2, 3, 4, 5], 3)); // Checks if value is in array
console.log(cleanSet(getListStudents(), "location")); // Checks the cleaned set
console.log(groceriesList()); // Checks the groceries list
console.log(updateUniqueItems(groceriesList())); // Checks the updated unique items
