"use client";

import React, { useEffect, useState } from "react";
// @ts-ignore
import {
  CheckBoxGroup,
  Row,
  Col,
  Form,
  Button,
  Collapsible
} from "@edx/paragon";
import courseMockFilters from "../../helpers/courseMockFilters";
import ShowMore from "./showMore";

interface ShowAllFilters {
  [key: string]: boolean;
}

interface CourseFiltersProps {
  onFilterChange: (selectedFilters: any) => void; // Update 'any' with the appropriate type for your filters
}

const CourseFilters = ({ onFilterChange }: CourseFiltersProps) => {
  const [selectedFilters, setSelectedFilters] = useState<any>({});
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

  const handleShowMore = (key: string) => {
    setShowAllFilters((prevShowAllFilters) => ({
      ...prevShowAllFilters,
      [key]: true,
    }));

    console.log("showAllFilters", showAllFilters);
  };

  const handleShowLess = (key: string) => {
    setShowAllFilters((prevShowAllFilters) => ({
      ...prevShowAllFilters,
      [key]: false,
    }));

    console.log("showAllFilters", showAllFilters);
  };

  useEffect(() => {
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
          {courseMockFilters.map((filterCategory, index) => {
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
                      {showAllFilters[filterCategory.key] ? (
                        <Button
                          variant="outline-primary"
                          onClick={() => handleShowLess(filterCategory.key)}
                        >
                          Show Less
                        </Button>
                      ) : ( 
                        <Button
                          variant="outline-primary"
                          onClick={() => handleShowMore(filterCategory.key)}
                        >
                          Show More
                        </Button>
                      )}
                    </Col>
                  )}
                </Row>
              </Col>
            );
          })}
        </Row>
        <ShowMore></ShowMore>
      </div>
    </>
  );
};

export default CourseFilters;
