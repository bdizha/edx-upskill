// @ts-ignore
import { Timelapse, Person, Calendar } from "@edx/paragon/icons";

// @ts-ignore
import { Container, Row, Col, Icon } from "@edx/paragon";
import Course from "../../../types/course";

export interface CourseSnapshotProps {
  course: Course;
}

const CourseSnapshot = ({ course }: CourseSnapshotProps) => {
  const courseSnapshotColumns = [
    {
      title: "6 weeks",
      subText: "7–10 hours per week",
      icon: Timelapse,
    },
    {
      title: "Starts Feb 14, 2024",
      subText: "Enroll by Feb 6, 2024",
      icon: Calendar,
    },
    {
      title: "Instructor-paced",
      subText: "Instructor-led on a course schedule",
      icon: "Person",
    },
  ];

  return (
    <Container className="course-snapshot mt-12 bg-gray-100" size="md">
      <Row className="my-6">
        {courseSnapshotColumns.map((attribute, index) => (
          <Col
            className="d-flex align-items-center"
            xs={12}
            sm={4}
            lg={4}
            xl={4}
          >
            <Icon size="lg" src={attribute.icon} />
            <div>
              <h4 className="py-0 pt-2">{attribute.title}</h4>
              <p className="small">{attribute.subText}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseSnapshot;
