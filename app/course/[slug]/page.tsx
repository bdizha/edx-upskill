"use client";

import React, { useState } from "react";
// @ts-ignore
import { Container, Row, Col, Image, Icon } from "@edx/paragon";
// @ts-ignore
import courseMockData from "../helpers/courseMockData";
import Course from "../types/course";
import CourseSnapshot from "../components/course-snapshot";
import CourseHeader from "../components/course-header";
import CourseCurriculum from "../components/course-curriculum";

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
