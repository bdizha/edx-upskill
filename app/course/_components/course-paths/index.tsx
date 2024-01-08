"use-client";
// @ts-ignore
import {
  Container,
  Row,
  Col,
  Table,
  Icon,
  useWindowSize,
  Typography,
  Button,
} from "@edx/paragon";
// @ts-ignore
import { Check } from "@edx/paragon/icons";

import "./styles.scss";

import React, { useState } from "react";

const CoursePaths = () => {
  const { height, width } = useWindowSize();
  const WaysContents = () => {
    return (
      <>
        <h1>Ways to take this course</h1>
        <h5>Choose you path to enroll.</h5>
        <Button style={{ display: "flex", flexDirection: "column" }}>
          <h5 style={{ color: "white" }}>Enroll now</h5>
          <h5 style={{ color: "white" }}>Starts Jan 24, 2024</h5>
        </Button>
      </>
    );
  };
  const WaysContentsContainer = () => {
    if (width < 992) {
      return (
        <Container className="mt-12" size="md">
          <Row className="my-1">
            <Col xs={12} sm={12} lg={3} xl={3}>
              {WaysContents()}
            </Col>
          </Row>
        </Container>
      );
    }
    return (
      <Container
        style={{
          width: "100%",
          height: "100%",
          clipPath: "polygon(0 0, 100% 0, 74% 100%, 0% 100%)",
          backgroundColor: "#f2f0ef",
        }}
      >
        <Row className="my-1">
          <Col xs={12} sm={12} lg={12} xl={12}>
            {WaysContents()}
          </Col>
        </Row>
      </Container>
    );
  };
  return (
    <Container className="pb-8" size="lg" style={{ paddingBottom: "50px" }}>
      <Row className="my-1">
        <Col xs={12} sm={12} lg={4} xl={4}>
          {WaysContentsContainer()}
        </Col>
        <Col xs={12} sm={12} lg={8} xl={8}>
          <div
            style={{
              display: "grid",
              textAlign: "center",
            }}
          >
            <table className="PerformanceTable">
              <tr>
                <th></th>
                <th className="skeleton">
                  <div className="track-header verified">
                    <h3 className="heading">Verified Track</h3>
                  </div>
                </th>
                <th>
                  <div className="track-header audit">
                    <h3 className="heading">Audit Track</h3>
                  </div>
                </th>
              </tr>
              <tr>
                <td>
                  <h4 className="comparison-header">Price</h4>
                </td>
                <td>
                  <p className="comparison-item">$75 USD</p>
                </td>
                <td>
                  <p className="comparison-item">Free</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="comparison-header">
                    Access to course materials
                  </h4>
                </td>
                <td className="skeleton">
                  <p className="comparison-item">Unlimited</p>
                  <span style={{ marginTop: "3px", marginLeft: "3px" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      focusable="false"
                      aria-hidden="true"
                    >
                      <path
                        d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                        fill="currentColor"
                      ></path>
                    </svg>{" "}
                  </span>
                </td>
                <td>
                  <div className="skeleton">
                    <p className="comparison-item">Limited</p>
                    <span style={{ marginTop: "3px", marginLeft: "3px" }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path
                          d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"
                          fill="currentColor"
                        ></path>
                      </svg>{" "}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="comparison-header">
                    World class institutions and universities
                  </h4>
                </td>
                <td className="check-icon skeleton">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="yes"
                  >
                    <path
                      d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </td>
                <td>
                  <div
                    className="check-icon"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="yes"
                    >
                      <path
                        d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="comparison-header">edX support</h4>
                </td>
                <td
                  className="check-icon"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="yes"
                  >
                    <path
                      d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </td>
                <td>
                  <div
                    className="check-icon"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="yes"
                    >
                      <path
                        d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="comparison-header">
                    Shareable certificate upon completion
                  </h4>
                </td>
                <td
                  className="check-icon"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="yes"
                  >
                    <path
                      d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </td>
                <td>
                  <div className="skeleton">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        focusable="false"
                        aria-label="no"
                      >
                        <path d="M19 13H5v-2h14v2Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="track-headers-row">
                <td>
                  <h4 className="comparison-header">
                    Graded assignments and exams
                  </h4>
                </td>
                <td
                  className="check-icon"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="yes"
                  >
                    <path
                      d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </td>
                <td>
                  <div className="skeleton">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        focusable="false"
                        aria-label="no"
                      >
                        <path d="M19 13H5v-2h14v2Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </div>
                </td>
              </tr>
            </table>
            <div className="faq">
              <a
                className="inline-link muted-link"
                href="https://support.edx.org/hc/en-us/sections/360002747833-About-Audit-and-Verified-Courses"
              >
                Read our FAQs
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-n1 ml-1"
                  role="img"
                  aria-label=""
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M19 19H5V5h7V3H3v18h18v-9h-2v7ZM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              in a new tab about frequently asked questions on these tracks.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CoursePaths;
