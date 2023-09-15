import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Choco = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    let chocolate = props.chocolate;
    let setCart = props.setCart;
    let setTotalPrice = props.setTotalPrice;
    let totalItems = props.totalItems;
    let setShow = props.setShow;



    const addToCart = () => {

        if (totalItems === 8) {

            return setShow(true);

        } else {
            setIsAdded(true);
            setCart(oldArray => [...oldArray, chocolate]);
            setTotalPrice(oldValue => oldValue + chocolate.price);
            return;
        }

    }

    const removeFromCart = (chocolate) => {
        setIsAdded(false);
        setCart(oldArray => oldArray.filter((item) => item.name !== chocolate.name));
        setTotalPrice(oldValue => oldValue - chocolate.price);
        return;
    }

    return (
        <>
            <Card style={{ width: '19rem', height: '27rem', margin: '1rem 0' }}>
                <Card.Img variant="top" src={chocolate.img} style={{ height: '15rem' }} />
                <Card.Body>
                    <Card.Title>{chocolate.name}</Card.Title>
                    <Card.Text>
                        Price: {chocolate.price}
                    </Card.Text>

                    {isAdded ? <Button variant="primary" onClick={() => removeFromCart(chocolate)}>Remove</Button> : <Button variant="primary" onClick={() => addToCart(chocolate)}>Add to Cart</Button>}
                </Card.Body>
            </Card>
        </>
    );
}

export default Choco;