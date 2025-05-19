#!/usr/bin/node
const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== ''); // Supprimer les lignes vides
      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = lines.slice(1).map((line) => line.split(','));
      const fields = {};

      students.forEach((student) => {
        const firstName = student[0].trim();
        const field = student[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      const result = [];
      result.push(`Number of students: ${students.length}`);
      for (const [field, names] of Object.entries(fields)) {
        result.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve(result.join('\n'));
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const database = process.argv[2];
      const studentData = await countStudents(database);
      res.end(studentData);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('Not found');
  }
});

app.listen(1245);
module.exports = app;
