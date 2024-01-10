

// @ts-ignore
import { Timelapse, Person, Calendar } from "@edx/paragon/icons";

// @ts-ignore
import { Container, Row, Col, Icon, Image } from "@edx/paragon";
import Course from "../../../types/course";

export interface  CourseHeaderProps {
    course: Course;
}

const CourseHeader = ({course}: CourseHeaderProps) => {
    return (
      <Container className="mt-6" size="xl">
        <Row className="my-3">
          <Col xs={12} sm={6} lg={6} xl={7}>
            <h1>{course.title}</h1>
            <p>{course.summary}</p>
          </Col>
          <Col xs={12} sm={6} lg={6} xl={5}>
            <Image
              src={course.headerImage}
              alt="Image description"
            />
          </Col>
        </Row>
      </Container>
    )
}

export default CourseHeader;