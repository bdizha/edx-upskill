import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CoursePaths from ".";
import React from "react";

const setup = () => {
  const { container } = render(<CoursePaths />);
  return container;
};
describe("Page", () => {
  it("renders the component without error", () => {
    setup();
    const expectedTextInDocument = [
      "Price",
      "edX support",
      "Shareable certificate upon completion",
      "Graded assignments and exams",
    ];

    expectedTextInDocument.forEach((item) => {
      const textItem = screen.getByText(item);
      expect(textItem).toBeInTheDocument();
    });
  });

  it("check if FAQ is there in the document", () => {
    const container = setup();
    expect(container.getElementsByClassName("faq").length).toBe(1);
  });
});
