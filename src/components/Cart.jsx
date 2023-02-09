import React from "react";
import { Container, ListGroup, Button, Card, Col, Row } from "react-bootstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row>
              <Col>
                <img alt="" height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>price :- {item.productPrice}</span>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => removeItem(item)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <Card.Header>Grand Total</Card.Header>
          <Card.Body>
            Your amount for {cartItem.length} product is ₹{amount}
          </Card.Body>
          <Card.Footer>
            <Button variant="success" onClick={buyNow}>
              Pay here
            </Button>
          </Card.Footer>
        </Card>
      ) : (
        <h1 className="text-warning">Cart is empty</h1>
      )}
    </Container>
  );
};

export default Cart;
