import React from "react";

import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <>
      <div className="accordian-container">
        <h2
          className="accordian-heading"
          style={{
            textAlign: "center",
            color: "#f7cf21",
            fontWeight: "700",
            fontSize: "2.4rem",
            marginBottom: "1.8rem",
          }}
        >
          Frequently Asked Questions:
        </h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accordianHeader">
              1. How Much Does It Cost To Repair LED On A TV?
            </Accordion.Header>
            <Accordion.Body className="accordianBody">
              - The cost of TV LED repair and replacement varies from store to
              store.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accordianHeader">
              2. What Is The Common Problem In TV?
            </Accordion.Header>
            <Accordion.Body className="accordianBody">
              - The most common LED problem is one of the following: power
              supply, LCD connection, or power spikes. These all require a
              professional to replace or repair specific parts that are not
              readily available to most consumers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="accordianHeader">
              3. Are PVC pipes best for drainage system?
            </Accordion.Header>
            <Accordion.Body className="accordianBody">
              - PVC pipes are best for drainage but pose environmental concerns.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default BasicExample;
