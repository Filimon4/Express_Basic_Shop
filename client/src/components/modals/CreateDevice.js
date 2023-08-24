import React, { useContext, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index.js';
import { remove } from 'mobx';

const CreateBrand = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
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
            <Dropdown className="mt-3">
                <Dropdown.Toggle>Выбирите тип</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type => 
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>    
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3">
                <Dropdown.Toggle>Выбирите бренд</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map(brand => 
                        <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>    
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control 
                className='mt-3'
                placeholder="Введите название устройства"
            />
            <Form.Control 
                className='mt-3'
                placeholder="Введите стоимость устройства"
                type="number"
            />
            <Form.Control 
                className='mt-3'
                type="file"
            />
            <hr/>
            <Button 
                variant={"outline-dark"}
                onClick={addInfo}
            >
                Добавить новое свойство
            </Button>
            {info.map(i => 
                <Row key={i.number} className='mt-3'>
                    <Col md={4}>
                        <Form.Control 
                            placeholder="Введите название свойства"
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Control 
                            placeholder="Введите описание свойства"
                        />
                    </Col>
                    <Col md={4}>
                        <Button
                            onClick={() => removeInfo(i.number)}
                            variant={"outline-danger"}
                        >
                            Удалить
                        </Button>
                    </Col>
                </Row>    
            )}
        </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Добавить</Button>
                <Button variant="outline-success" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateBrand;