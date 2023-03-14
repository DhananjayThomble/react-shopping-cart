import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce } from "faker";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "./CartItem";


const imgCategory = "laptop";
const imgCount = 6;
const pageNumber = 1;
const url = `https://api.pexels.com/v1/search?query=${imgCategory}&per_page=${imgCount}&page=${pageNumber}`;
const apiKey = process.env.REACT_APP_PEXELS_API_KEY;
const BuyPage = ({ addInCart }) => {

  // array of product objects
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    // get img from pexels api
    const { data } = await Axios.get(url, {
      headers: {
        Authorization: apiKey,
      },
    });
    console.log(data);

    const { photos } = data;

    // get medium and tiny img from pexels api, product name and price from faker
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    // set the product state
    setProduct(allProduct);
  };

  // fetch the product info on page load
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {/* show 3(12/4) cols per row */}
        {product.map((product) => (
          <Col md={4} key={product.id}>
            {/* passing 1 product info to the CartItem */}
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
