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

import React, { useState } from "react";

const data = [
  {
    name: "",
    paid: (
      <Button
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f0cc00",
        }}
      >
        <h5 style={{ color: "black" }}>Verified Track</h5>
      </Button>
    ),
    free: (
      <Button
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f2f0ef",
        }}
      >
        <h5 style={{ color: "black" }}>Audit Track</h5>
      </Button>
    ),
  },
  {
    name: "Price",
    paid: "$75 USD",
    free: "Free",
  },
  {
    name: "Access to course materials",
    paid: "Unlimited",
    free: "Limited",
  },
  {
    name: "World class institutions and universities",
    paid: <Icon src={Check} color="green" />,
    free: "Limited",
  },
  {
    name: "edx support",
    paid: <Icon src={Check} color="green" />,
    free: "Limited",
  },
  {
    name: "Shareable certificate upon completion",
    paid: <Icon src={Check} color="green" />,
    free: "-",
  },
  {
    name: "Graded assignments and exams",
    paid: <Icon src={Check} color="green" isValid />,
    free: "-",
  },
];

const columnsData = [
  {
    label: <h1>test</h1>,
    key: "name",
    columnSortable: true,
    onSort: () => {},
    hideHeader: true,
    width: "col-3",
  },
  {
    label: "",
    key: "paid",
    columnSortable: false,
    hideHeader: true,
    onSort: () => {},
    width: "col-6",
  },
  {
    label: "",
    key: "free",
    columnSortable: false,
    hideHeader: true,
    onSort: () => {},
    width: "col-3",
  },
];
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
  const ExampleCompo = () => {
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
          {ExampleCompo()}
        </Col>
        <Col xs={12} sm={12} lg={8} xl={8}>
          <Table
            data={data}
            columns={columnsData}
            className="table-responsive"
            rowHeaderColumnKey="name"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CoursePaths;
