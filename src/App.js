import Card from "./components/Card";
import chocolates from "./assets/chocolates";
import { Col, Container, Row } from "react-bootstrap";
import './assets/container.css';
import { useState } from "react";
import Header from './components/Header';
import Alert from "./components/Alert";

function App() {

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false);

  return (
    <>
        <Header totalPrice={totalPrice} setTotalPrice={setTotalPrice} cart={cart} setCart={setCart} />

        <Container className="container" style={{ paddingTop: '5rem' }}>
          <Row >
            {chocolates.map((chocolate) => (
              <Col className="d-flex" key={chocolate.id} >
                <Card chocolate={chocolate} className="flex-fill" setCart={setCart} setTotalPrice={setTotalPrice} key={chocolate.id} totalItems={cart.length} setShow={setShow} />
              </Col>
            ))}
          </Row>
        </Container>
        <Alert show={show} setShow={setShow} />
    </>

  );
}

export default App;
