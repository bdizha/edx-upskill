"use client";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Modal, Collapsible, Row, Col, Button, CheckBoxGroup } from "@edx/paragon";
import courseMockFilters from "@/app/helpers/courseMockFilters";
import {
  appliedFiltersState,
  filterModalState,
  selectedFiltersState,
} from "@/app/recoil/atoms/courseFilters";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import FilterCheckbox from "./filterCheckbox";

interface ShowMoreFiltersProps {
  selectedCategory: string;
}

const ShowMoreFilters = ({ selectedCategory }: ShowMoreFiltersProps) => {
  const [showModal, setShowModal] = useRecoilState(filterModalState);
  const [appliedFilters, setAppliedFilters] =
    useRecoilState(appliedFiltersState);
  const [selectedFilters, setSelectedFilters] =
    useRecoilState(selectedFiltersState);

  useEffect(() => {
    console.log("selectedFilters", "selectedFilters");
  }, [selectedFilters]);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleApplyFilters = () => {
    setAppliedFilters(selectedFilters);
    setShowModal(false);
    console.log("handleApplyFilters", "handleApplyFilters");
  };

  console.log("courseMockFilters", courseMockFilters);

  const handleClearFilters = () => {
    let filters: any = {};

    Object.keys(appliedFilters).forEach((filterKey) => {
      filters[filterKey] = [];
    });

    setAppliedFilters({
      ...appliedFilters,
      ...filters,
    });

    filters = {};
    Object.keys(selectedFilters).forEach((filterKey) => {
      filters[filterKey] = [];
    });

    setSelectedFilters({
      ...selectedFilters,
      ...filters,
    });
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
                  <CheckBoxGroup>
                    {filterCategory.filters.map((filter, index) => (
                      <FilterCheckbox
                        key={index}
                        filterKey={filterCategory.key}
                        filterValue={filter}
                        isApplied={false}
                      ></FilterCheckbox>
                    ))}
                  </CheckBoxGroup>
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
