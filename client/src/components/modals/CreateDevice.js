import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../../index.js';
import { remove } from 'mobx';
import { createDevice } from '../../http/deviceAPI.js';
import { fetchBrand, fetchTypes } from '../../http/deviceAPI.js';
import { observer } from 'mobx-react-lite';

const CreateBrand = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [type, setType] = useState(null)
    const [brand, setBrand] = useState(null)
    
    useEffect(() => {
        fetchTypes().then(devices => device.setTypes(devices))
        fetchBrand().then(brands => device.setBrands(brands))
    }, [])

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    
    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
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
                <Dropdown.Toggle>{device._selectedType.name || "Выбирите тип"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map(type => 
                        <Dropdown.Item 
                            onClick={() => {
                                device.setSelectedType(type)
                                console.log(device)
                            }} 
                            key={type.id}
                        >
                            {type.name}
                        </Dropdown.Item>    
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3">
                <Dropdown.Toggle>{device._selectedBrand.name || "Выбирите бренд"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map(brand => 
                        <Dropdown.Item 
                            onClick={() => device.setSelectedBrand(brand)} 
                            key={brand.id}
                        >
                            {brand.name}
                        </Dropdown.Item>    
                    )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='mt-3'
                placeholder="Введите название устройства"
            />
            <Form.Control 
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className='mt-3'
                placeholder="Введите стоимость устройства"
                type="number"
            />
            <Form.Control
                onChange={selectFile}
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
                            value={i.title}
                            onChange={(e) => changeInfo('title', e.target.value, i.number)}
                            placeholder="Введите название свойства"
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Control 
                            value={i.description}
                            onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
                <Button variant="outline-danger" onClick={addDevice}>Добавить</Button>
                <Button variant="outline-success" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateBrand;