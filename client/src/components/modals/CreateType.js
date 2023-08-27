import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createType} from "../../http/deviceAPI.js"

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
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
                <Button variant="outline-danger" onClick={addType}>Добавить</Button>
                <Button variant="outline-success" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;