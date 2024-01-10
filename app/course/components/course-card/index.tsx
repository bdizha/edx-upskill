import React from "react";
// @ts-ignore
import { Card, Truncate } from "@edx/paragon";
import Link from "next/link";
import {Course} from "@/app/types/course";

interface Props {
  course: Course;
  uuid: string;
}

const CourseCard = ({ course, uuid }: Props) => {
  return (
    <Link href={'/' + course.product.toLocaleLowerCase() + '/' + course.uuid}>
      <Card className="mb-4" isClickable key={uuid}>
        <Card.ImageCap
          src={course.card_image_url}
          srcAlt={course.card_image_url}
          logoSrc={course.card_image_url}
          logoAlt={course.card_image_url}
        />
        <Card.Section>
          <h4 className="h4 course-name">
            <Truncate lines={2}>{course.title}</Truncate>
          </h4>
          <p className="small">{course.partner[0]}</p>
          <div className="small">
            {/* <Icon src={Add} style={{ height: '24px', width: '24px' }} />3 months */}
          </div>
          <div className="small">
            {/* <Icon src={Add} style={{ height: '24px', width: '24px' }} className="text-dark-500" /> */}
            {course.product}
          </div>
        </Card.Section>
      </Card>
    </Link>
  );
};

export default CourseCard;
