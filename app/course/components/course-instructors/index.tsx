// @ts-ignore
import { Container, Row, Col } from "@edx/paragon";
import { Course } from "@/app/types/course";
import InstructorCard from "./instructorCard";

export interface CourseInstructorsProps {
  course: Course;
}

const CourseInstructors = ({ course }: CourseInstructorsProps) => {
  const instructors = [
    {
      id: 1,
      name: "John Guttag",
      imageUrl:
        "https://prod-discovery.edx-cdn.org/media/people/profile_images/844aa675-750c-4b1a-aed1-466aa69463a7-c9df666ee72c.jpg",
      bio: "Dugald C. Jackson Professor of Computer Science and Electrical Engineering • MIT",
      link: "https://www.edx.org/bio/john-guttag",
    },
    {
      id: 2,
      name: "Eric Grimson",
      imageUrl:
        "https://prod-discovery.edx-cdn.org/media/people/profile_images/e5cf80a8-0063-407c-9376-36c5043ddf47-f51710f41c25.jpg",
      bio: "Bernard Gordon Professor of Medical Engineering, Professor of Computer Science • MIT",
      link: "https://www.edx.org/bio/eric-grimson",
    },
    {
      id: 3,
      name: "Ana Bell",
      imageUrl:
        "https://prod-discovery.edx-cdn.org/media/people/profile_images/e1767c5b-6746-4a05-965e-24c384246ecb-bdb98aa20544.jpg",
      bio: "Senior Lecturer, Computer Science and Electrical Engineering • Massachusetts Institute of Technology",
      link: "https://www.edx.org/bio/ana-bell",
    },
  ];

  return (
    <Container className="mt-12" size="lg">
      <Row className="my-3">
        <Col xs={12} sm={12} lg={12} xl={12}>
          <h1 className="mb-3 text-center">About the instructors</h1>
          <div className="row gx-4">
            {instructors.map((instructor) => (
              <Col
                className="mb-3"
                key={instructor.id}
                xs={12}
                sm={12}
                lg={4}
                xl={4}
              >
                <InstructorCard
                  name={instructor.name}
                  imageUrl={instructor.imageUrl}
                  bio={instructor.bio}
                  link={instructor.link}
                />
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseInstructors;
