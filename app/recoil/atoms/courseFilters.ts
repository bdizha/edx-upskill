import { atom } from "recoil";

import courseMockFilters from "../../course/helpers/courseMockFilters";

export const courseFiltersState = atom({
  key: "courseFiltersState",
  default: courseMockFilters,
});

export const selectedFiltersState = atom({
  key: "selectedFiltersState",
  default: [],
});

export const filterCategoryState = atom({
  key: "filterCategoryState",
  default: [],
});

export const filterModalState = atom({
  key: "filterModalState",
  default: [],
});
