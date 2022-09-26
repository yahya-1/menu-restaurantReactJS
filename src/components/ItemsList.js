import { Card, Col, Row } from "react-bootstrap";
import React from "react";
import Bounce from "react-reveal/Bounce";

function ItemsList({ itemsData }) {
  return (
    <Row>
      <Col className="co-12">
        <Bounce left>
          {itemsData.length ? (
            itemsData.map((item) => {
              return (
                <Card
                  key={item.id}
                  className="flex-md-row bg-transparent  mb-3"
                >
                  <Col className="col-md-4 col-lg-3">
                    <Card.Img
                      variant="top"
                      src={item.imgURL}
                      style={{
                        objectFit: "cover",
                        maxHeight: "160px",
                      }}
                    />
                  </Col>
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center lh-lg p-1">
                      {item.title}
                      <span className="item-price">{item.price}</span>
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <h3 className="text-center">لا يوجد أصناف</h3>
          )}
        </Bounce>
      </Col>
    </Row>
  );
}

export default ItemsList;
