import React from "react";
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

const showMore = () => {
  const handleOpen = () => {
    alert("Opening...");
  };

  const handleClose = () => {
    alert("Closing...");
  };

  const handleSelectFilter = () => {};

  const showFilters = () => {
    {
      return courseMockFilters.map((filterCategory, index) => {
        return (
          <Collapsible title={filterCategory.label} key={index}>
            <Row>
              <Col xl={12}>
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
              </Col>
            </Row>
          </Collapsible>
        );
      });
    }
  };

  console.log("showMore :: showFilters", showFilters());
  console.log("showMore :: courseMockFilters", courseMockFilters);

  return (
    <Modal
      open={handleOpen}
      title="All filters."
      body={showFilters()}
      onClose={handleClose}
    >
      Testingn...
    </Modal>
  );
};

export default showMore;
