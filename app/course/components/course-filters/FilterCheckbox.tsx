// @ts-ignore
import { CheckBoxGroup, Form } from "@edx/paragon";
import {
  appliedFiltersState,
  selectedFiltersState,
} from "@/app/recoil/atoms/courseFilters";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SelectedFilters } from "../../types/courseFilter";

interface FilterCheckboxProps {
  filterKey: string;
  filterValue: string;
  isApplied: boolean;
}

const FilterCheckbox = ({
  filterKey,
  filterValue,
  isApplied,
}: FilterCheckboxProps) => {
  const [selectedFilters, setSelectedFilters] =
    useRecoilState(selectedFiltersState);

  const [appliedFilters, setAppliedFilters] =
    useRecoilState(appliedFiltersState);

  const [isChecked, setIsChecked] = useState(
    selectedFilters[filterKey]?.includes(filterValue)
  );

  useEffect(() => {
    const currentValues = isApplied ? appliedFilters : selectedFilters;

    setIsChecked(currentValues[filterKey]?.includes(filterValue));
  }, [selectedFilters, appliedFilters]);

  const handleChange = (event: {
    target: {
      checked: boolean;
      value: string;
      name: string;
    };
  }) => {
    const filterKey: string = event.target.name;
    const filterValue: string = event.target.value;

    // console.log("filterValues :: filterKey", filterKey);
    // console.log("filterValues :: filterValue", filterValue);

    let filters: SelectedFilters = isApplied ? appliedFilters : selectedFilters;

    // set is checked local state
    setIsChecked(event.target.checked);

    if (isApplied) {
      setAppliedFilters(() => ({
        ...filters,
        [filterKey]: event.target.checked // Check if this checkbox is checked
          ? [...(filters[filterKey] || []), filterValue]
          : (filters[filterKey] || []).filter(
              (filter: string) => filter !== filterValue
            ),
      }));
    } else {
      setSelectedFilters(() => ({
        ...filters,
        [filterKey]: event.target.checked // Check if this checkbox is checked
          ? [...(filters[filterKey] || []), filterValue]
          : (filters[filterKey] || []).filter(
              (filter: string) => filter !== filterValue
            ),
      }));
    }
  };

  return (
    <CheckBoxGroup>
      <Form.Checkbox
        checked={isChecked}
        name={filterKey}
        value={filterValue}
        onChange={handleChange}
      >
        {filterValue}
      </Form.Checkbox>
    </CheckBoxGroup>
  );
};

export default FilterCheckbox;
