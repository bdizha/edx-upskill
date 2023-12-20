import React from "react";
import Course from "../../types/course";
// @ts-ignore
import { Container, Row, Col, Card, Button } from "@edx/paragon";

interface CourseRunsProps {
  course: Course;
}

const courseRuns = [{}];

const CourseRuns = ({ course }: CourseRunsProps) => {
  return (
    <Container className="mt-12" size="md">
      <h2 className="h2">Course Runs</h2>
      <div className="row">
        <div className="col col-3">
          <Card className="mb-4 p-4">
            <h4 className="h4">Starts Jan 24, 2024</h4>
            <p className="small">Ends Mar 28, 2024</p>
            <Button variant="brand" className="mb-2 mb-sm-0">Enroll</Button>
          </Card>
        </div>

        <div className="col col-3">6</div>

        <div className="col col-3">3</div>
      </div>

      <p className="padding-bottom"></p>
    </Container>
  );
};

export default CourseRuns;
