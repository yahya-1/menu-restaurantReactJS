import React from "react";
import { Col, Row } from "react-bootstrap";

function Header() {
  return (
    <Row className="justify-content-center text-center">
      <Col>
        <span className="title">قائمة الطعام</span>
      </Col>
    </Row>
  );
}

export default Header;
