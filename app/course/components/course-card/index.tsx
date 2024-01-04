import React from "react";
// @ts-ignore
import { Card, Truncate } from "@edx/paragon";
import Link from "next/link";
import Course from "../../types/course";

interface Props {
  course: Course;
  uuid: string;
}

const CourseCard = ({ course, uuid }: Props) => {
  return (
    <Link href={course.path}>
      <Card className="mb-4" isClickable key={uuid}>
        <Card.ImageCap
          src={course.headerImage}
          srcAlt={course.headerImage}
          logoSrc={course.schoolLogo}
          logoAlt={course.schoolName}
        />
        <Card.Section>
          <h4 className="h4 course-name">
            <Truncate lines={2}>{course.title}</Truncate>
          </h4>
          <p className="small">{course.schoolName}</p>
          <div className="small">
            {/* <Icon src={Add} style={{ height: '24px', width: '24px' }} />3 months */}
          </div>
          <div className="small">
            {/* <Icon src={Add} style={{ height: '24px', width: '24px' }} className="text-dark-500" /> */}
            {course.productType}
          </div>
        </Card.Section>
      </Card>
    </Link>
  );
};

export default CourseCard;
