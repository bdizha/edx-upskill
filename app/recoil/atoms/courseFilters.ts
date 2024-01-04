import { atom } from "recoil";

import courseMockFilters from "../../course/helpers/courseMockFilters";
import { SelectedFilters } from "@/app/course/types/courseFilter";

export const courseFiltersState = atom({
  key: "courseFiltersState",
  default: courseMockFilters,
});

export const selectedFiltersState = atom<SelectedFilters>({
  key: "selectedFiltersState",
  default: {},
});

export const filterCategoryState = atom({
  key: "filterCategoryState",
  default: [],
});

export const filterModalState = atom({
  key: "filterModalState",
  default: false,
});
