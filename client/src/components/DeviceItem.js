import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';
import star from "../assets/star.png"
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const navigation = useNavigate()

    return (
        <Col md={3} className={"mt-4"} onClick={() => navigation(`${DEVICE_ROUTE}/${device.id}`)}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image height={150} width={150} src={device.img}/>
                <div className="text-black-50 d-flex justify-content-between align-items-center mt-2">
                    <div>Samsung...</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image className='mt-0.5' width={17} height={17} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem