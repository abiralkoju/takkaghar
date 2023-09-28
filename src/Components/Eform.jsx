import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { createClient } from "@supabase/supabase-js";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    repair: "",
    issues: "",
    address: "",
    contact_no: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const supabaseUrl = "https://jiiardhuovfydqqytmir.supabase.co/";
    const supabaseKey =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppaWFyZGh1b3ZmeWRxcXl0bWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MTc4MTEsImV4cCI6MjAxMTQ5MzgxMX0.jcBlRdHbPkGkrGhR_dIXs5B-HZeIHtA_P788-nr-Vkg";
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .insert([formData]);
      if (error) {
        console.error("Error inserting data:", error);
      } else {
        console.log("Data inserted successfully:", data);
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }

    // Clear the form
    // setFormData({
    //   name: "",
    //   email: "",
    //   repair: "",
    //   issues: "",
    //   address: "",
    //   contact_no: "",
    // });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>I would like to repair</Form.Label>
        <Form.Control
          type="text"
          name="repair"
          value={formData.repair}
          onChange={handleChange}
          placeholder=""
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Issues/ Problems</Form.Label>
        <Form.Control
          type="text"
          name="issues"
          value={formData.issues}
          onChange={handleChange}
          placeholder=""
        />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Contact no.</Form.Label>
          <Form.Control
            type="text"
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
          />
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
  );
};

export default ContactForm;
