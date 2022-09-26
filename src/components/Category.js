import React from "react";
import { Col, Row } from "react-bootstrap";

function Category({ filterByCategory, allCategory }) {
  const onFilter = (category) => {
    filterByCategory(category);
  };
  return (
    <Row className="my-4">
      <Col className="col-12 d-flex justify-content-center align-items-center">
        {allCategory.length
          ? allCategory.map((item) => {
              return (
                <button
                  key={Math.random()}
                  onClick={() => onFilter(item)}
                  className="btn butt mx-2"
                >
                  {item}
                </button>
              );
            })
          : null}
      </Col>
    </Row>
  );
}

export default Category;
