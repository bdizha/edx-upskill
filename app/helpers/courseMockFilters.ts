import filters from "@/app/api/filters.json";
import { CourseFilters } from "../types/course";

const courseMockFilters: CourseFilters[] = [];

Object.keys(filters).forEach((filterKey) => {
  //@ts-ignore
  courseMockFilters.push(filters[filterKey]);
});

export default courseMockFilters;
