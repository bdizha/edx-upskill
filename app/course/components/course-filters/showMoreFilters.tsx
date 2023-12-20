"use client";
import React, { useEffect, useState } from "react";
// @ts-ignore
import {
  Modal,
  Collapsible,
  Row,
  Col,
  CheckBoxGroup,
  Form,
} from "@edx/paragon";
import courseMockFilters from "../../helpers/courseMockFilters";

interface ShowMoreFiltersProps {
  showModal: boolean;
  selectedCategory: string;
}

const ShowMoreFilters = ({
  showModal,
  selectedCategory,
}: ShowMoreFiltersProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {};

  useEffect(() => {
    setOpen(showModal);
  }, [showModal, selectedCategory]);

  const handleSelectFilter = () => {};

  const showFilters = () =>
    courseMockFilters.map((filterCategory, index) => {
      return (
        <Collapsible
          title={filterCategory.label}
          key={index}
          defaultOpen={filterCategory.key == selectedCategory}
        >
          <Row>
            <Col xl={12}>
              {filterCategory.filters.map((filter, index) => (
                <CheckBoxGroup key={index}>
                  <Form.Checkbox
                    name={filterCategory.key}
                    value={filter.label}
                    onChange={handleSelectFilter}
                  >
                    {filter.label}
                  </Form.Checkbox>
                </CheckBoxGroup>
              ))}
            </Col>
          </Row>
        </Collapsible>
      );
    });

  console.log("showMore :: showFilters", showFilters());
  console.log("showMore :: courseMockFilters", courseMockFilters);

  return (
    <Modal
      size="md"
      open={open}
      title="All filters."
      body={showFilters()}
      onClose={handleClose}
    ></Modal>
  );
};

export default ShowMoreFilters;
