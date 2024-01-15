import { promises as fsPromises } from "fs";
import path from "path";
import { fileURLToPath } from "url"; // Import the fileURLToPath function

const __filename = fileURLToPath(import.meta.url); // Get the current module's filename
const __dirname = path.dirname(__filename); // Extract the directory name

// Create an array to store the combined data
const coursesData = [];

// Define the folder path where your JSON files are located
const folderPath = path.join(__dirname);

console.log("course data :: folderPath", folderPath);

async function writeToFile(fileData, filename) {
  // Convert the array to JSON format
  const jsonData = JSON.stringify(fileData, null, 2); // The 2 is for pretty-printing with 2 spaces for indentation

  // Define the file path where you want to write the JSON data
  const filePath = `${folderPath}/${filename}.json`;

  // Write the JSON data to the file
  await fsPromises.writeFile(filePath, jsonData, "utf8");
}

function toUpperCaseFirst(str) {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

async function readFiles() {
  try {
    // Read all files in the folder
    const files = await fsPromises.readdir(folderPath);

    console.log("files", files);

    for (const file of files) {
      if (file.startsWith("courses-") && file.endsWith(".json")) {
        // Read the JSON file and parse it
        const filePath = path.join(folderPath, file);
        const jsonData = await fsPromises.readFile(filePath, "utf8");
        const fileData = JSON.parse(jsonData);

        // Extract the coursesData from the JSON file
        const fileCourses = fileData.results[0].hits;

        // console.log('fileCourses', fileCourses);

        // Push the coursesData from the JSON file into the combined array
        coursesData.push(...fileCourses);
      }
    }

    // Create a filters set out of the course filter attributes
    let filtersData = {};

    const filterKeys = [
      "learning_type",
      "availability",
      "subject",
      "skills",
      "level",
      "language",
      "product",
      "program_type",
      "partner",
    ];

    for (const course of coursesData) {
      for (const filterKey of filterKeys) {
        // console.log(
        //   "mock-data :: filtersData[filterKey]",
        //   filtersData[filterKey]
        // );

        if (filtersData[filterKey] === undefined) {
          filtersData[filterKey] = {
            label: toUpperCaseFirst(filterKey),
            key: filterKey,
            filters: [],
          };
        }

        let courseFilters = [];
        if (filterKey === "skills") {
          courseFilters = course.skills
            .map((skill) => skill.skill)
            .filter((item) => {
              console.log(item + " !== null", item !== null);

              return item !== null;
            });
        } else if (filterKey === "product") {
          courseFilters = [course[filterKey]];
        } else {
          courseFilters = course[filterKey];
        }

        filtersData[filterKey].filters = [
          ...new Set([...filtersData[filterKey].filters, ...courseFilters]),
        ];
      }
    }

    // save course json data
    console.log("mock-data :: filtersData", filtersData);
    writeToFile(coursesData, "courses");

    // save filtes json data
    console.log("mock-data :: filtersData", filtersData);
    writeToFile(filtersData, "filters");

    console.log("courses.json has been written successfully.");
  } catch (err) {
    console.error("Error:", err);
  }
}

readFiles();
