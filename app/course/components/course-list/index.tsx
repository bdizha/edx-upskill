"use client";

import React, { useEffect, useState } from "react";
// @ts-ignore
import { Container, Row, Col, Form } from "@edx/paragon";
import CourseCard from "../course-card/index";
import CourseFilters from "../course-filters";
import { useRecoilValue } from "recoil";
import { appliedFiltersState } from "@/app/recoil/atoms/courseFilters";
import { Course } from "@/app/types/course";

interface CourseFiltersProps {
  [key: string]: string;
}

interface CoursesProps {
  courses: Course[]
}

const CourseList = ({courses}: CoursesProps) => {

  console.log("course data :: ", courses);

  const [courseList, setCourseList] = useState(courses);
  const appliedFilters = useRecoilValue(appliedFiltersState);

  useEffect(() => {
    const filteredCourses = courseList?.filter((course) => {
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
          appliedFilters[filterKey]?.length > 0 &&
          !appliedFilters[filterKey]?.includes(courseFilters[filterKey])
        ) {
          showCourse = false;
        }
      });

      // console.log("CourseList :: showCourse", showCourse);

      return showCourse;
    });


    console.log("CourseList :: appliedFilters", appliedFilters);

    setCourseList(filteredCourses);
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
              {courseList?.length > 0 && courseList.map((course, index) => (
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
