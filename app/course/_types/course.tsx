interface CourseRun {
  date?: string;
}

export interface CourseFilter {
  key: string;
  label: string;
}

interface Course {
  shouldfirePreQuerySegmentEvent: string;
  uuid: string;
  title: string;
  path: string;
  courseType: string;
  headerImage: string;
  schoolName: string;
  schoolLogo: string;
  cardType: string;
  productType: string;
  summary?: string;
  courseRuns: CourseRun[];
}

export default Course;
