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
import {
  filterModalState,
  filterShowModalState,
} from "@/app/recoil/atoms/courseFilters";
import { useRecoilState } from "recoil";
import FilterCheckbox from "./FilterCheckbox";

interface ShowMoreFiltersProps {
  selectedCategory: string;
}

const ShowMoreFilters = ({ selectedCategory }: ShowMoreFiltersProps) => {
  const [showModal, setShowModal] = useRecoilState(filterModalState);

  const handleClose = () => {
    setShowModal(false);
  };

  const showFilters = () =>
    courseMockFilters.map((filterCategory, index) => {
      return (
        <>
          {selectedCategory && showModal && (
            <Collapsible
              title={filterCategory.label}
              key={index}
              defaultOpen={filterCategory.key === selectedCategory}
            >
              <Row>
                <Col xl={12}>
                  {filterCategory.filters.map((filter, index) => (
                     <FilterCheckbox
                     key={index}
                     filterKey={filterCategory.key}
                     filterValue={filter.label}
                   ></FilterCheckbox>
                  ))}
                </Col>
              </Row>
            </Collapsible>
          )}
        </>
      );
    });

  console.log("showMore :: showFilters", showFilters());
  console.log("showMore :: courseMockFilters", courseMockFilters);

  return (
    <Modal
      size="md"
      open={showModal}
      title="All filters."
      body={showFilters()}
      onClose={handleClose}
    ></Modal>
  );
};

export default ShowMoreFilters;
