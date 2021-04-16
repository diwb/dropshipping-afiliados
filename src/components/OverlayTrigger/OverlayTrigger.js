import React from 'react'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../pages/Main/style.css'
import '../Card/style.css'

export default function OverlayTriggerDefault(props) {
    return (
        <OverlayTrigger 
            trigger={['click', 'focus']}  
            overlay={ props.overlay } 
            placement={props.placement}
        >
                {props.element}           
        </OverlayTrigger>
    )
}