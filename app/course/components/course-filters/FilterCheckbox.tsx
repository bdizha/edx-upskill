// @ts-ignore
import { CheckBoxGroup, Form } from "@edx/paragon";
import { selectedFiltersState } from "@/app/recoil/atoms/courseFilters";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { SelectedFilters } from "../../types/courseFilter";

interface FilterCheckboxProps {
  filterKey: string;
  filterValue: string;
}

const FilterCheckbox = ({ filterKey, filterValue }: FilterCheckboxProps) => {
  const [selectedFilters, setSelectedFilters] =
    useRecoilState(selectedFiltersState);

    const [isChecked, setIsChecked] = useState(selectedFilters[filterKey]?.includes(filterValue));

  const handleChange = (event: {
    target: {
      checked: boolean | ((prevState: boolean) => boolean);
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
    console.log("filterValues :: target.checked", event.target.checked);

    setSelectedFilters(() => ({
      ...filters,
      [filterKey]: isChecked // Check if this checkbox is checked
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
