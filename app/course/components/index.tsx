"use client";

import { RecoilRoot } from "recoil";
import CourseList from "./course-list";

const Courses = () => {
    return (
      <RecoilRoot>
        <CourseList></CourseList>
      </RecoilRoot>
    )
}

export default Courses;