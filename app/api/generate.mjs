import { promises as fsPromises } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Import the fileURLToPath function

const __filename = fileURLToPath(import.meta.url); // Get the current module's filename
const __dirname = path.dirname(__filename); // Extract the directory name

// Create an array to store the combined data
const coursesData = [];

// Define the folder path where your JSON files are located
const folderPath = path.join(__dirname);

console.log('course data :: folderPath', folderPath);

async function readFiles() {
  try {
    // Read all files in the folder
    const files = await fsPromises.readdir(folderPath);

    console.log("files", files);

    for (const file of files) {
      if (file.startsWith('courses-') && file.endsWith('.json')) {
        // Read the JSON file and parse it
        const filePath = path.join(folderPath, file);
        const jsonData = await fsPromises.readFile(filePath, 'utf8');
        const fileData = JSON.parse(jsonData);

        // Extract the coursesData from the JSON file
        const fileCoursesData = fileData.results[0].hits;

        console.log('fileCoursesData', fileCoursesData);

        // Push the coursesData from the JSON file into the combined array
        coursesData.push(...fileCoursesData);
      }
    }

    // Convert the array to JSON format
    const jsonData = JSON.stringify(coursesData, null, 2); // The 2 is for pretty-printing with 2 spaces for indentation

    // Define the file path where you want to write the JSON data
    const filePath = folderPath + '/courses.json';

    // Write the JSON data to the file
    await fsPromises.writeFile(filePath, jsonData, 'utf8');
    console.log('courses.json has been written successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

readFiles();