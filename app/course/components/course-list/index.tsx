"use client";

import React, { useEffect, useState } from "react";
// @ts-ignore
import { Container, Row, Col, Form } from "@edx/paragon";
import CourseCard from "../course-card/index";
import courseMockData from "../../helpers/courseMockData";
import CourseFilters from "../course-filters";
import { useRecoilValue } from "recoil";
import { appliedFiltersState } from "@/app/recoil/atoms/courseFilters";

interface CourseFiltersProps {
  [key: string]: string;
}

const CourseList = () => {
  const [courses, setCourses] = useState(courseMockData);
  const appliedFilters = useRecoilValue(appliedFiltersState);

  useEffect(() => {
    const filteredCourses = courseMockData.filter((course) => {
      let showCourse = true;

      const courseFilters: CourseFiltersProps = course.filters;

      // console.log("CourseList :: course", course.title);
      // console.log("CourseList :: courseFilters", courseFilters);

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
          appliedFilters[filterKey].length > 0 &&
          !appliedFilters[filterKey].includes(courseFilters[filterKey])
        ) {
          showCourse = false;
        }
      });

      // console.log("CourseList :: showCourse", showCourse);

      return showCourse;
    });


    console.log("CourseList :: appliedFilters", appliedFilters);

    setCourses(filteredCourses);
  }, [appliedFilters]);

  return (
    <Container className="mt-6" size="xl">
      <Row className="my-3">
        <Col xs={12} sm={6} lg={4} xl={3}>
          <CourseFilters></CourseFilters>
        </Col>
        <Col xs={12} sm={6} lg={8} xl={9}>
          <Container className="course-list">
            <h2 className="mb-4">All courses</h2>
            <Row>
              {courses.map((course, index) => (
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
