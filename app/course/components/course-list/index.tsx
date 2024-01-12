"use client";

import React, { useEffect, useState } from "react";
// @ts-ignore
import { Container, Row, Col, Pagination } from "@edx/paragon";
import CourseCard from "../course-card/index";
import CourseFilters from "../course-filters";
import { useRecoilValue } from "recoil";
import { appliedFiltersState } from "@/app/recoil/atoms/courseFilters";
import courses from "@/app/api/courses.json";
import { Course } from "@/app/types/course";

interface CourseFiltersProps {
  [key: string]: string;
}

const CourseList = () => {
  const coursesPerPage = 24;

  const [courseList, setCourseList] = useState(courses);
  const [pageTotal, setPageTotal] = useState(
    Math.ceil(courses.length / coursesPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const appliedFilters = useRecoilValue(appliedFiltersState);

  useEffect(() => {
    const filteredCourses = courses?.filter((course) => {
      let showCourse = true;

      Object.keys(appliedFilters).forEach((filterKey) => {
        // console.log(
        //   "CourseList :: appliedFilters[filterKey].length > 0",
        //   appliedFilters[filterKey].length > 0
        // );
        // console.log(
        //   "CourseList :: !appliedFilters[filterKey].includes(courseFilters[filterKey])",
        //   !appliedFilters[filterKey].includes(courseFilters[filterKey])
        // );

        if (
          appliedFilters[filterKey]?.length > 0 &&
          // @ts-ignore
          course[filterKey].containers(filterKey)
        ) {
          showCourse = false;
        }
      });

      return showCourse;
    });

    setPageTotal(Math.ceil(filteredCourses.length / coursesPerPage));

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;

    // Use the slice method to get the courses for the current page
    const coursesForCurrentPage = filteredCourses.slice(startIndex, endIndex);

    setCourseList(coursesForCurrentPage);
  }, [appliedFilters, currentPage]);

  const handlePageSelect = (page: any) => {
    console.log("handlePageSelect selected", page);
    setCurrentPage(page);
  };

  return (
    <Container className="mt-6" size="xl">
      <Row className="my-3">
        <Col xs={12} sm={6} lg={4} xl={3}>
          <CourseFilters></CourseFilters>
        </Col>
        <Col xs={12} sm={6} lg={8} xl={9}>
          <Container className="course-list">
            <Row className="my-3" justify-content="space-between">
              <Col xs={12} sm={12} lg={4} xl={4}>
                <h2 className="mb-4">All courses</h2>
              </Col>
              <Col className="text-right" xs={12} sm={12} lg={8} xl={8}>
                <Pagination
                  currentPage={currentPage}
                  paginationLabel="Pagination"
                  pageCount={pageTotal}
                  variant="secondary"
                  onPageSelect={handlePageSelect}
                />
              </Col>
            </Row>
            <Row>
              {courseList?.length > 0 &&
                courseList.map((course, index) => (
                  <Col xs={12} sm={6} md={4} key={index}>
                    <CourseCard course={course} uuid={course.uuid}></CourseCard>
                  </Col>
                ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseList;
