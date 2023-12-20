// @ts-ignore
import { Container, Row, Col } from "@edx/paragon";
import Course from "../../types/course";

export interface  CourseCurriculumProps {
    course: Course;
}

/*

Dugald C. Jackson Professor of
Computer Science and Electrical
Engineering • MIT
*/

const instructors = [
  {
    name: 'John Guttag',
    

  }
];

const CourseCurriculum = ({course}: CourseCurriculumProps) => {
    return (
      <Container className="mt-12 course-curriculumn" size="md">
        <Row className="my-3">
          <Col xs={12} sm={12} lg={12} xl={12}>
            <h1>About this course</h1>
            <p>{course.summary}</p>
            <p>{course.summary}</p>
            <p>{course.summary}</p>
            <p>{course.summary}</p>
          </Col>
          <Col xs={12} sm={12} lg={12} xl={12}>
            <h1>Course Curriculum</h1>
            <p>{course.summary}</p>
            <p>{course.summary}</p>
            <p>{course.summary}</p>
            <p>{course.summary}</p>
          </Col>
        </Row>
      </Container>
    )
}

export default CourseCurriculum;