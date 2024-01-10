"use client";

import { RecoilRoot } from "recoil";
import CourseList from "./course-list";
import { Course } from "@/app/types/course";

interface CoursesProps {
  courses: Course[]
}

const Courses = ({courses}: CoursesProps) => {
    return (
      <RecoilRoot>
        <CourseList courses={courses}></CourseList>
      </RecoilRoot>
    )
}

export default Courses;