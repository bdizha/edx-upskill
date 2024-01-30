import courseUuids from "../fixtures/courses.json";

describe("edx-skill tests", () => {
  it("should navigate to home page", () => {
    cy.visit("/");
  });

  it("should navigate to course page", () => {
    courseUuids.forEach((courseUuid: string) => {
      cy.visit("/course/" + courseUuid);
    });
  });
});
