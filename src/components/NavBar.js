import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

function NavBar({ filterBySearch }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="text-warning" href="#">
            مطعم جديد
          </Navbar.Brand>
          <Navbar.Toggle className="" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث"
                className="ms-2"
                aria-label="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button
                onClick={() => {
                  filterBySearch(searchValue);
                  setSearchValue("");
                }}
                className=""
                variant="outline-success"
              >
                ابحث
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
}

export default NavBar;
