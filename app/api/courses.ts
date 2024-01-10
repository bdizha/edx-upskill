import fs from 'fs';
import path from 'path';
import { Course } from '../types/course';

// Create an array to store the combined data
const coursesData: Course[] = [];

// Define the folder path where your JSON files are located
const folderPath = path.join(__dirname, 'api');

console.log('course data :: folderPath', folderPath);

// Read all files in the folder
fs.readdirSync(folderPath).forEach(file => {
  if (file.startsWith('coursesData-') && file.endsWith('.json')) {
    // Read the JSON file and parse it
    const filePath = path.join(folderPath, file);
    const jsonData: { coursesData: Course[] } = JSON.parse(
      fs.readFileSync(filePath, 'utf8')
    );

    // Extract the coursesData from the JSON file
    const coursesData = jsonData.coursesData;

    // Push the coursesData from the JSON file into the combined array
    coursesData.push(...coursesData);
  }
});

// Export the combined array
export default coursesData;
