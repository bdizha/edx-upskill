"use client";

import React, { useState } from "react";
// @ts-ignore
import { Container, Row, Col, Image, Icon } from "@edx/paragon";
// @ts-ignore
import courseMockData from "@/app/helpers/courseMockData";
import { Course } from "@/app/types/course";
import CourseSnapshot from "../components/course-snapshot";
import CourseCurriculum from "../components/course-curriculum";
import CourseRuns from "../components/course-runs";
import CoursePaths from "../components/course-paths";
import CourseHeader from "../components/course-header";
import CourseInstructors from "../components/course-instructors";

const Page = ({ params }: { params: { slug: string } }) => {
  const course: Course | any = courseMockData.find(
    (course: Course | any) => course.uuid == params.slug
  );

  console.log("Course", course);
  console.log("Course :: params.slug", params.slug);

  // Check if course exists
  if (!course) {
    return <Container size="md"><h1>Course not found!</h1></Container>;
  }

  return (
    <>
      <CourseHeader course={course}></CourseHeader>
      <CourseSnapshot course={course}></CourseSnapshot>
      <CourseRuns course={course}></CourseRuns>
      <CourseCurriculum course={course}></CourseCurriculum>
      <CourseInstructors course={course}></CourseInstructors>
      <CoursePaths></CoursePaths>
    </>
  );
};

export default Page;
