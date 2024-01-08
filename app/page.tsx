import Courses from "./course/components";

import data from "./api/courses-0001.json"
export default function Page() {

  console.log("courses data", data);

  return <Courses></Courses>
}
