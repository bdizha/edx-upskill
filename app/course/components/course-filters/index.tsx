"use client";

import React, { useEffect, useState } from "react";
// @ts-ignore
import {
  CheckBoxGroup,
  Row,
  Col,
  Form,
  Button,
  Collapsible,
} from "@edx/paragon";
import courseMockFilters from "../../helpers/courseMockFilters";
import ShowMoreFilters from "./showMoreFilters";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {
  courseFiltersState,
  selectedFiltersState,
} from "../../../recoil/atoms/courseFilters";
import courseMockData from "../../helpers/courseMockData";

interface ShowAllFilters {
  [key: string]: boolean;
}

interface CourseFiltersProps {
  onFilterChange: (selectedFilters: any) => void; // Update 'any' with the appropriate type for your filters
}

const CourseFilters = ({ onFilterChange }: CourseFiltersProps) => {
  const [showModal, setShowModal] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");

  const [courseFilters, setCourseFilters] = useRecoilState(courseFiltersState);
  const [selectedFilters, setSelectedFilters] =
    useRecoilState(selectedFiltersState);
  const [showAllFilters, setShowAllFilters] = useState<ShowAllFilters>({});
  const maxVisibleFilters = 4;

  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters]);

  const handleChange = (event: {
    target: {
      checked: boolean | ((prevState: boolean) => boolean);
      value: string;
      name: string;
    };
  }) => {
    const filterKey = event.target.name;
    const filterValue = event.target.value;

    let filters = selectedFilters;

    if (event.target.checked) {
      if (filterKey in selectedFilters) {
        filters[filterKey].push(filterValue);
      } else {
        filters[filterKey] = [filterValue];
      }
    } else {
      filters[filterKey] = filters[filterKey].filter((filter: any) => {
        return filter !== filterValue;
      });
    }

    setSelectedFilters(filters);

    onFilterChange(selectedFilters);

    console.log("filterValues :: filters", filters);
    console.log("filterValues :: selectedFilters", selectedFilters);
  };

  const handleShowMore = (categoryKey: string) => {
    setFilterCategory(categoryKey);
    setShowModal(true);

    console.log("showAllFilters", showAllFilters);
  };

  useEffect(() => {
    // @ts-ignore
    setCourseFilters(courseMockFilters);

    // Read filters from localStorage on page load
    const savedFilters = localStorage.getItem("selectedFilters");
    if (savedFilters) {
      const { showAllFilters } = JSON.parse(savedFilters);
      setShowAllFilters(showAllFilters);
    }
  }, []);

  return (
    <RecoilRoot>
      <h3 className="mb-4">Filters</h3>
      <div className="course-filters">
        <Row>
          {courseFilters.map((filterCategory, index) => {
            const visibleFilters = filterCategory.filters.slice(
              0,
              showAllFilters[filterCategory.key] ? undefined : maxVisibleFilters
            );
            return (
              <Col xl={12} key={index}>
                <h4>{filterCategory.label}</h4>
                <Row>
                  <Col xl={12}>
                    {visibleFilters.map((filter, index) => (
                      <CheckBoxGroup key={index}>
                        <Form.Checkbox
                          name={filterCategory.key}
                          value={filter.label}
                          onChange={handleChange}
                        >
                          {filter.label}
                        </Form.Checkbox>
                      </CheckBoxGroup>
                    ))}
                  </Col>
                  {filterCategory.filters.length > maxVisibleFilters && (
                    <Col xl={12}>
                      <Button
                        className="mb-5"
                        variant="outline-primary"
                        onClick={() => handleShowMore(filterCategory.key)}
                      >
                        Show More
                      </Button>
                    </Col>
                  )}
                </Row>
              </Col>
            );
          })}
        </Row>
        <ShowMoreFilters
          showModal={showModal}
          selectedCategory={filterCategory}
        ></ShowMoreFilters>
      </div>
    </RecoilRoot>
  );
};

export default CourseFilters;
