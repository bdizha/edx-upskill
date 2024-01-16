import React from "react";
import { Course } from "@/app/types/course";
// @ts-ignore
import { Container, Row, Col, Card, Button, Icon, Form } from "@edx/paragon";
// @ts-ignore
import { Launch } from "@edx/paragon/icons";

interface CourseRunsProps {
  course: Course;
}

const courseRuns = [
  {
    startDate: "Jan 21",
    endDate: "Feb 03",
  },
  {
    startDate: "Jun 06",
    endDate: "Jul 03",
  },
  {
    startDate: "Aug 11",
    endDate: "Sep 27",
  },
];

const CourseRuns = ({ course }: CourseRunsProps) => {
  return (
    <Container className="mt-12" size="md">
      <h3 className="h3">There is one session available:</h3>
      <p className="d-flex align-items=center small">
        36,521 already enrolled! After a course session ends, it will be{" "}
        <a className="d-flex ml-1" href="#">
          archived
          <Icon
            src={Launch}
            className="ml-1"
            style={{ height: "20px", width: "20px" }}
          />
        </a>
      </p>
      <Row className="my-3">
        {courseRuns.map((courseRun) => (
          <Col xs={6} md={4}>
            <Card className="mb-4">
              <Card.Section className="text-center">
                <h4 className="h4 mb-0">Starts {courseRun.startDate}</h4>
                <p className="small">Ends {courseRun.endDate}</p>
                <Button variant="brand" className="w-100">
                  Enroll
                </Button>
              </Card.Section>
            </Card>
          </Col>
        ))}
      </Row>
      <Form.Checkbox>
        <p className="x-small text-gray-500">
          I would like to receive email from IBM and learn about other offerings
          related to Data Visualization and Building Dashboards with Excel and
          Cognos.
        </p>
      </Form.Checkbox>
    </Container>
  );
};

export default CourseRuns;
