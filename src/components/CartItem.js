import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CartItem({ product, addInCart }) {
  return (
    <Card className="mt-2 mb-1 text-center">
      <Card.Img
        variant="top"
        height={"250"}
        width={"100%"}
        src={product.tinyImage}
      />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text>Price: RS {product.productPrice}</Card.Text>
        <Button variant="info">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
