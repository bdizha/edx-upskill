import { atom, selector } from "recoil";

import courseMockFilters from "@/app/helpers/courseMockFilters";;
import { courseFiltersState } from "../atoms/courseFilters";

const coursesState = selector({
  key: "coursesState",
  get: ({ get }) => {
    const courseFilters = get(courseFiltersState);
    const courses = courseMockFilters;

    return courses;
  },
});
