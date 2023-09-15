
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/cart.css';

const Cart = (props) => {

    const show = props.show;
    const setShow = props.setShow;
    const cart = props.cart;
    const totalPrice = props.totalPrice;

    const handleClose = () => setShow(false);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>CART</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul style={{ paddingLeft: '0' }}>
                        {cart.length > 0 ? cart.map((item) => <li className='cartItem' >

                            <div className='leftSide'><img src={item.img} className='img' alt={item.name} /></div>
                            <div className='rightSide'>
                                <p>{item.name}</p>
                                <p>Price: {item.price} </p>
                            </div>

                        </li>
                        )

                            :

                            <li className='cartItem' >Cart is Empty</li>
                        }
                    </ul>

                </Modal.Body>
                <Modal.Footer>

                    <div style={{ marginRight: 'auto' }}><p>Total  : {totalPrice}</p></div>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Check out
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cart;