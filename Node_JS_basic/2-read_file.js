#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Delete empty lines
    if (lines.length === 0) throw new Error('Cannot load the database');

    // Extract headers and rows of data
    const headers = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));

    // Check data validity
    if (students.length === 0) throw new Error('Cannot load the database');

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const firstName = student[0].trim();
      const field = student[3].trim(); // The field is assumed to be in 4th position

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    // Display results for each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
