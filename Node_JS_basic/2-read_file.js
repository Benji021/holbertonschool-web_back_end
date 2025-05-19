#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {

    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Delete empty lines

    if (lines.length <= 1) throw new Error('Cannot load the database');

    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    students.forEach((student) => {
      if (student.length >= 4) {  // Checks data for completeness
        const firstName = student[0].trim();
        const field = student[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    console.log(`Number of students: ${Object.values(fields).flat().length}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
