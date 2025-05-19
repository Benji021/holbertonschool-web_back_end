import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];
    try {
      const students = await readDatabase(dbFile);
      const sortedFields = Object.keys(students).sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      );
      let output = 'This is the list of our students\n';

      sortedFields.forEach((field) => {
        const list = students[field].join(', ');
        output += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
      });

      res.status(200).send(output);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const dbFile = process.argv[2];
    try {
      const students = await readDatabase(dbFile);
      const list = students[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
