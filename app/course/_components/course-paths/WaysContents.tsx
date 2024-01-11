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
import { Check, InfoOutline, Minus } from "@edx/paragon/icons";

import "./styles.scss";

import React, { useState } from "react";

const WaysContents = () => {
  return (
    <>
      <h1>Ways to take this course</h1>
      <h5>Choose you path to enroll.</h5>
      <Button className="button-container">
        <h5 className="text-light-100">Enroll now</h5>
        <h5 className="text-light-100">Starts Jan 24, 2024</h5>
      </Button>
    </>
  );
};
const WaysContentsContainer = () => {
  const { width } = useWindowSize();

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
  } else {
    return (
      <Container className="polygon-container">
        <Row className="my-1">
          <Col xs={12} sm={12} lg={12} xl={12}>
            {WaysContents()}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default WaysContentsContainer;
