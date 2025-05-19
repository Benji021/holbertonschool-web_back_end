#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  try {
    // Lire le fichier de manière synchrone
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Supprimer les lignes vides

    // Vérifier si le fichier est vide (hors en-têtes)
    if (lines.length <= 1) throw new Error('Cannot load the database');

    // Récupérer les étudiants (en ignorant la ligne d'en-tête)
    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    // Parcourir les étudiants pour les classer par filière
    students.forEach((student) => {
      if (student.length >= 4) {  // Vérifie si les données sont complètes
        const firstName = student[0].trim();
        const field = student[3].trim();

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    // Afficher le nombre total d'étudiants
    console.log(`Number of students: ${Object.values(fields).flat().length}`);

    // Afficher le nombre d'étudiants par filière
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    // Lancer l'erreur si le fichier est inaccessible ou vide
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
