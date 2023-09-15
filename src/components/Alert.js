import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Alert = (props) => {

    const show = props.show;
    const setShow = props.setShow;

    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Alert
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You can not add more than 8 Chocolates per pack!
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Alert;