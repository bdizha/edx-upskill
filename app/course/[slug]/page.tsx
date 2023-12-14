"use client";

import React, { useState } from "react";
// @ts-ignore
import { Container, Row, Col, Image, Icon } from "@edx/paragon";
// @ts-ignore
import courseMockData from "../_helpers/courseMockData";
import Course from "../_types/course";
import CourseSnapshot from "../_components/course-snapshot";
import CourseHeader from "../_components/course-header";
import CourseCurriculum from "../_components/course-curriculum";

const Page = ({ params }: { params: { slug: string } }) => {
  const course: Course | any = courseMockData.find((course: Course | any) =>
    course.path.includes(params.slug)
  );

  // 
  if (!course) {
    // alert(course.path);
    return <h1>Course not found!</h1>;
  }

  return (
    <>
      <CourseSnapshot course={course}></CourseSnapshot>
      <CourseCurriculum course={course}></CourseCurriculum>
    </>
  );
};

export default Page;
