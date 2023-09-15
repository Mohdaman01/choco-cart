import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';
import { useState } from 'react';

const Header = (props) => {

  let cartTotal = props.totalPrice;
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar bg='secondary' data-bs-theme="dark" fixed="top" expand="lg" className="">
        <Container >
          <Navbar.Brand href="#home" style={{ color: 'white' }}>CHOCO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="#home" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link href="#link" style={{ color: 'white' }} onClick={()=>setShow(true)} >Cart ( Cart Total: <i>{cartTotal}</i> ) </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={show} setShow={setShow} cart={props.cart} setCart={props.setCart} totalPrice={props.totalPrice} setTotalPrice={props.setTotalPrice} setIsAdded={props.setIsAdded} />
    </>
  );
}

export default Header;