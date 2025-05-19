#!/usr/bin/node
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

      // Extraire les en-têtes et les lignes de données
      const headers = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));

      if (students.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      console.log(`Number of students: ${students.length}`);

      const fields = {};

      students.forEach((student) => {
        const firstName = student[0].trim();
        const field = student[3].trim(); // On suppose que le champ est en 4e position

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      // Afficher les résultats pour chaque champ
      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
