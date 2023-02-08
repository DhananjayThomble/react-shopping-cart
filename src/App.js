import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from "react-bootstrap";
import { useState } from "react";
import BuyPage from "./components/BuyPage";

function App() {
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
    }
  };

  const buyNow = () => {
    setCartItem([]);
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((arrItem) => arrItem.id !== item.id));
  };

  return (
    <Container>
      <BuyPage />
    </Container>
  );
}

export default App;
