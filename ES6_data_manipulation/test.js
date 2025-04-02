const getListStudents = require("./0-get_list_students.js");
const { getListStudentIds } = require("./1-get_list_student_ids.js");
const { getStudentsByLocation } = require("./2-get_students_by_loc.js");
const { getStudentIdsSum } = require("./3-get_ids_sum.js");
const { updateStudentGradeByCity } = require("./4-update_grade_by_city.js");
const { createInt8TypedArray } = require("./5-typed_arrays.js");
const { setFromArray } = require("./6-set.js");
const { hasValuesFromArray } = require("./7-has_array_values.js");
const { cleanSet } = require("./8-clean_set.js");
const { groceriesList } = require("./9-groceries_list.js");
const { updateUniqueItems } = require("./10-update_uniq_items.js");

test("getListStudents returns a list of students", () => {
  expect(getListStudents()).toEqual([
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 2, firstName: "James", location: "Columbia" },
    { id: 5, firstName: "Serena", location: "San Francisco" },
  ]);
});

test("getListStudentIds returns an array of student IDs", () => {
  expect(getListStudentIds(getListStudents())).toEqual([1, 2, 5]);
});

test("getStudentsByLocation filters students by location", () => {
  expect(getStudentsByLocation(getListStudents(), "San Francisco")).toEqual([
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 5, firstName: "Serena", location: "San Francisco" },
  ]);
});

test("getStudentIdsSum returns the sum of student IDs", () => {
  expect(getStudentIdsSum(getListStudents())).toBe(8);
});

test("updateStudentGradeByCity updates student grades", () => {
  expect(
    updateStudentGradeByCity(getListStudents(), "San Francisco", [
      { studentId: 1, grade: 90 },
      { studentId: 2, grade: 85 },
    ])
  ).toEqual([
    { id: 1, firstName: "Guillaume", location: "San Francisco", grade: 90 },
    { id: 5, firstName: "Serena", location: "San Francisco", grade: "N/A" },
  ]);
});

test("createInt8TypedArray creates an Int8 Typed Array", () => {
  expect(createInt8TypedArray(10, 2, 42).buffer.byteLength).toBe(10);
});

test("setFromArray creates a Set from an array", () => {
  expect(setFromArray([1, 2, 3, 4, 5])).toEqual(new Set([1, 2, 3, 4, 5]));
});

test("hasValuesFromArray checks if values exist in the Set", () => {
  expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [3])).toBe(true);
  expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [6])).toBe(false);
});

test("cleanSet filters and joins elements from a set", () => {
  expect(cleanSet(new Set(["apple", "banana", "apricot"]), "ap")).toBe("ple,ricot");
});

test("groceriesList returns a Map with grocery items", () => {
  expect(groceriesList()).toEqual(
    new Map([
      ["Apples", 10],
      ["Tomatoes", 10],
      ["Pasta", 1],
      ["Rice", 1],
      ["Banana", 5],
    ])
  );
});

test("updateUniqueItems updates only items with quantity 1", () => {
  const groceries = groceriesList();
  updateUniqueItems(groceries);
  expect(groceries.get("Pasta")).toBe(100);
  expect(groceries.get("Rice")).toBe(100);
  expect(groceries.get("Apples")).toBe(10);
});
