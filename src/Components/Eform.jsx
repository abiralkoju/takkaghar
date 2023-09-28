import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../assets/styles/global.scss";

function GridComplexExample() {
  return (
    <>
      <h2 className="electrical-form-heading">Share Your Issues</h2>
      <Form style={{ paddingRight: "1.5rem", marginTop: "1.5rem" }}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>I would like to repair </Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Issues/ Problems</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Enter your address" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Contact no.</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Button
          variant="primary"
          type="submit"
          style={{
            background: "#f7cf21",
            outline: "none",
            border: "none",
            color: "black",
            fontWeight: "600",
          }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

export default GridComplexExample;
