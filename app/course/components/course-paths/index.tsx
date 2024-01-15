"use-client";
// @ts-ignore
import { Container, Row, Col, Icon } from "@edx/paragon";
// @ts-ignore
import { Check, InfoOutline, Minus } from "@edx/paragon/icons";

import "./styles.scss";

import React, { useState } from "react";
import WaysContentsContainer from "./WaysContents";

const CoursePaths = () => {
  return (
    <Container className="mb-4" size="lg">
      <Row className="my-1">
        <Col xs={12} sm={12} lg={4} xl={4}>
          <WaysContentsContainer />
        </Col>
        <Col xs={12} sm={12} lg={8} xl={8}>
          <div className="table-grid">
            <table>
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
                  <h4 className="large text-gray-900">Price</h4>
                </td>
                <td>
                  <p className="large text-black-50">$75 USD</p>
                </td>
                <td>
                  <p className="large text-black-50">Free</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="large text-gray-900">
                    Access to course materials
                  </h4>
                </td>
                <td className="skeleton mt-2">
                  <p className="large text-black-50">Unlimited</p>

                  <Icon src={InfoOutline} />
                </td>

                <td>
                  <div className="skeleton">
                    <p className="large text-black-50">Limited</p>
                    <Icon src={InfoOutline} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="large text-gray-900">
                    World class institutions and universities
                  </h4>
                </td>
                <td className="check-icon skeleton">
                  <Icon src={Check} />
                </td>
                <td>
                  <div className="check-icon justify-content-center d-flex">
                    <Icon src={Check} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="large text-gray-900">edX support</h4>
                </td>
                <td className="check-icon justify-content-center d-flex">
                  <Icon src={Check} />
                </td>
                <td>
                  <div className="check-icon justify-content-center d-flex">
                    <Icon src={Check} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <h4 className="large text-gray-900">
                    Shareable certificate upon completion
                  </h4>
                </td>
                <td className="check-icon justify-content-center d-flex">
                  <Icon src={Check} />
                </td>
                <td>
                  <div className="skeleton">
                    <span>
                      <Icon src={Minus} />
                    </span>
                  </div>
                </td>
              </tr>
              <tr className="track-headers-row">
                <td>
                  <h4 className="large text-gray-900">
                    Graded assignments and exams
                  </h4>
                </td>
                <td className="check-icon justify-content-center d-flex">
                  <Icon src={Check} />
                </td>
                <td>
                  <div className="skeleton">
                    <span>
                      <Icon src={Minus} />
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
