// @ts-ignore
import { Timelapse, Person, Calendar } from "@edx/paragon/icons";

// @ts-ignore
import { Container, Row, Col, Icon, Image } from "@edx/paragon";
import { Course } from "@/app/types/course";

export interface CourseHeaderProps {
  course: Course;
}

const CourseHeader = ({ course }: CourseHeaderProps) => {
  return (
    <Container className="mt-6" size="md">
      <Row className="my-3">
        <Col xs={12} sm={6} lg={6} xl={7}>
          <h1>{course.title}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: course.primary_description }}
          ></p>
        </Col>
        <Col xs={12} sm={6} lg={6} xl={5}>
          <Image
            className="course-image"
            src={course.card_image_url}
            alt={course.title}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CourseHeader;
