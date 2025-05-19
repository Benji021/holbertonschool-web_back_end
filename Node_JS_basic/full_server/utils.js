import fs from 'fs/promises';

/**
 * Reads a CSV database file asynchronously and returns an object of arrays of students' first names per field.
 * @param {string} filePath - The path to the CSV file.
 * @returns {Promise<Object>} - A promise that resolves with an object of arrays or rejects with an error.
 */
export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');
    const fields = {};

    for (const line of lines.slice(1)) { // Skip header
      const [firstname, field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    }

    return fields;
  } catch (error) {
    return Promise.reject(error);
  }
}
