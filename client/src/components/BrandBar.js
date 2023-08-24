import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '../index.js';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row xs="auto" className="d-flex" >
            {device.brands.map(brand => 
                <Card
                    style={{cursor: "pointer"}}
                    key={brand.id}
                    className="p-3 mb-2"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device._selectedBrand.id ? "danger" : "light"}
                >
                    {brand.name}
                </Card>
            )}
        </Row>

    );
});

export default BrandBar