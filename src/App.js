import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";

function App() {
  // used to store the cart items
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    // check if the item is already present in cart
    const isAlreadyAdded = cartItem.findIndex((arr) => {
      return arr.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast.error("Item is already present in cart");
    } else {
      setCartItem([...cartItem, item]);
      // console.log(item);
    }
  };

  // after buying the product, the cart should be empty
  const buyNow = () => {
    setCartItem([]);
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((arrItem) => arrItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addToCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
