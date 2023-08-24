import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index.js'
import { ListGroup } from 'react-bootstrap'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
    <ListGroup>
        {device._types.map(type => 
            <ListGroup.Item 
                style={{cursor: "pointer"}}
                key={type.id}
                active={type.id === device._selectedType.id}
                onClick={() => device.setSelectedType(type)}
            >
                {type.name}
            </ListGroup.Item>    
        )}
    </ListGroup>
    )
})

export default TypeBar