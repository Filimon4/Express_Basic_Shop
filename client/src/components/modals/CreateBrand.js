import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue("")
            onHide()
        });
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить новый тип
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Control 
                value={value}
                placeholder={"Введите название типа"}
                onChange={(e) => setValue(e.target.value)}
            />
        </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={addBrand}>Добавить</Button>
                <Button variant="outline-success" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;