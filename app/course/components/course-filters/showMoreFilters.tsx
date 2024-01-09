"use client";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Modal, Collapsible, Row, Col, Button, Form } from "@edx/paragon";
import courseMockFilters from "../../helpers/courseMockFilters";
import {
  appliedFiltersState,
  filterModalState,
  selectedFiltersState,
} from "@/app/recoil/atoms/courseFilters";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import FilterCheckbox from "./filterCheckbox";
import { SelectedFilters } from "@/app/course/types/courseFilter";

interface ShowMoreFiltersProps {
  selectedCategory: string;
}

const ShowMoreFilters = ({ selectedCategory }: ShowMoreFiltersProps) => {
  const [showModal, setShowModal] = useRecoilState(filterModalState);
  const setAppliedFilters = useSetRecoilState(appliedFiltersState);
  const [selectedFilters] = useRecoilState(selectedFiltersState);

  useEffect(() => {
  }, [selectedFilters]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleApplyFilters = () => {
    setAppliedFilters(selectedFilters);
    setShowModal(false);
    console.log("handleApplyFilters", "handleApplyFilters");
  };

  const handleClearFilters = useResetRecoilState(selectedFiltersState);

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
                      isApplied={false}
                    ></FilterCheckbox>
                  ))}
                </Col>
              </Row>
            </Collapsible>
          )}
        </>
      );
    });

  return (
    <Modal
      size="md"
      open={showModal}
      title="All filters."
      body={showFilters()}
      onClose={handleClose}
      renderDefaultCloseButton={false}
      buttons={[
        <Button variant="tertiary" onClick={handleClearFilters} data-autofocus>
          Clear all
        </Button>,
        <Button variant="success" onClick={handleApplyFilters} data-autofocus>
          Apply
        </Button>,
      ]}
    ></Modal>
  );
};

export default ShowMoreFilters;
