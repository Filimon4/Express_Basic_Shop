import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchBrand, fetchDevices, fetchTypes } from '../http/deviceAPI'

const Shop = observer(() => {
    const {device} = useContext(Context)
    
    useEffect(() => {
        fetchTypes().then(devices => device.setTypes(devices))
        fetchBrand().then(brands => device.setBrands(brands))
        fetchDevices().then(devices => device.setDevices(devices.rows))
    }, [])

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop