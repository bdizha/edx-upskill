"use client";

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "@edx/paragon"


const CaptureForm = () => {
  return (
    <>
      <div className="row">
        <div className="col col-5 mr-6">
          <div className="bg-primary-300 mr-3 rotate-45">
            <div className="form-header position-relative p-6">
                <h2 className="h1 mb-0 text-white">Get more</h2>
                <p className="h1 mt-1 mb-4 text-accent-b"> information </p>
                <p className="form-blurb text-white lead">Want to know more? Enter your information to learn more about this course from GetSmarter (an edX partner).</p>
            </div>
          </div>
        </div>
        <div className="col col-6 py-6">
          <div className="pr-2">
            <Row>
              <div className="col-12 ">
                <Form>
                  <Form.Row className="row" >
                    <Form.Group className="col col-6">
                      <Form.Control  placeholder="First Name"  />
                    </Form.Group >
                    <Form.Group className="col col-6">
                      <Form.Control  placeholder="Last Name"  />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail-2">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Form.Row>
                  <div className="bg-gray-100 p-3 mb-3" >
                    <p className="small">Email me about the Stanford Nutrition Science online short course.*</p>
                    <Form.RadioSet name="email" className="mb-3">
                      <Form.Row>
                        <Form.Radio value="yes" className="pr-2">Yes</Form.Radio>
                        <Form.Radio value="no">No</Form.Radio>
                      </Form.Row>
                    </Form.RadioSet>
                    <p className="small">edX, and its parent company, 2U, Inc., offer other online education programmes across various fields of study. Please email me about these programmes.</p>
                    <Form.RadioSet name="email">
                      <Form.Row>
                        <Form.Radio value="yes" className="pr-2">Yes</Form.Radio>
                        <Form.Radio value="no">No</Form.Radio>
                      </Form.Row>
                    </Form.RadioSet>
                  </div>
                  <p className="x-small text-italic">
                  By consenting to receive communications, you agree to the use of your data as described in GetSmarter's <a href="https://www.getsmarter.com/privacy-policy" target="_blank" rel="noreferrer" className="privacy">privacy policy</a>. You may opt out of receiving communications at any time.
                  </p>
                  <Button variant="primary" type="submit">
                    Request more info
                  </Button>
                </Form>
              </div>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}
export default CaptureForm;