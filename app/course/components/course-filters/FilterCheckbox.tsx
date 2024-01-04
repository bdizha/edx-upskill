// @ts-ignore
import { CheckBoxGroup, Form } from "@edx/paragon";
import { selectedFiltersState } from "@/app/recoil/atoms/courseFilters";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SelectedFilters } from "../../types/courseFilter";

interface FilterCheckboxProps {
  filterKey: string;
  filterValue: string;
}

const FilterCheckbox = ({ filterKey, filterValue }: FilterCheckboxProps) => {
  const [selectedFilters, setSelectedFilters] =
    useRecoilState(selectedFiltersState);

  console.log(
    "filterValues :: filterKey :: " + filterKey + " :: " + filterValue,
    selectedFilters[filterKey]?.includes(filterValue)
  );
  console.log(
    "filterValues :: filterKey :: " + filterKey,
    selectedFilters[filterKey]
  );

  const [isChecked, setIsChecked] = useState(
    selectedFilters[filterKey]?.includes(filterValue)
  );

  useEffect(() => {
    setIsChecked(selectedFilters[filterKey]?.includes(filterValue));
  }, [selectedFilters]);

  const handleChange = (event: {
    target: {
      checked: boolean;
      value: string;
      name: string;
    };
  }) => {
    const filterKey: string = event.target.name;
    const filterValue: string = event.target.value;

    console.log("filterValues :: filterKey", filterKey);
    console.log("filterValues :: filterValue", filterValue);

    let filters: SelectedFilters = selectedFilters;

    // set is checked local state
    setIsChecked(event.target.checked);

    console.log("filterValues :: isChecked", isChecked);
    console.log(
      "filterValues :: isChecked :: target.checked",
      event.target.checked
    );

    setSelectedFilters(() => ({
      ...filters,
      [filterKey]: event.target.checked // Check if this checkbox is checked
        ? [...(filters[filterKey] || []), filterValue]
        : (filters[filterKey] || []).filter(
            (filter: string) => filter !== filterValue
          ),
    }));
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
