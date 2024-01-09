"use client";

import React, { useEffect, useState } from "react";
// @ts-ignore
import { Row, Col, Button } from "@edx/paragon";
import courseMockFilters from "../../helpers/courseMockFilters";
import ShowMoreFilters from "./showMoreFilters";
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  appliedFiltersState,
  courseFiltersState,
  filterModalState,
  selectedFiltersState,
} from "../../../recoil/atoms/courseFilters";
import FilterCheckbox from "./filterCheckbox";

interface ShowAllFilters {
  [key: string]: boolean;
}

const maxVisibleFilters = 4;
interface CourseFiltersProps {}

const CourseFilters = ({}: CourseFiltersProps) => {
  const setShowModal = useSetRecoilState(filterModalState);
  const appliedFilters = useRecoilValue(appliedFiltersState);
  const setSelectedFilters = useSetRecoilState(selectedFiltersState);
  const [filterCategory, setFilterCategory] = useState("");
  const [courseFilters, setCourseFilters] = useRecoilState(courseFiltersState);
  const [showAllFilters, setShowAllFilters] = useState<ShowAllFilters>({});

  const handleShowMore = (categoryKey: string) => {

    // set the selected filters to the already applied ones
    setSelectedFilters(appliedFilters);

    // set filter category
    setFilterCategory(categoryKey);
    setShowModal(true);
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
    <>
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
                      <FilterCheckbox
                        key={index}
                        filterKey={filterCategory.key}
                        filterValue={filter.label}
                        isApplied={true}
                      ></FilterCheckbox>
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
        <ShowMoreFilters selectedCategory={filterCategory}></ShowMoreFilters>
      </div>
    </>
  );
};

export default CourseFilters;
