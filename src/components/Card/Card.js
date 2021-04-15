import React from 'react'
import Card from 'react-bootstrap/Card'
import './style.css'
import ButtonLink from '../../components/Button/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardComp(props) {
    return(
        <Card key={props.id} className="card text-center overflow shadow">
            <Card.Img variant="top" src={props.src} className="card-img-top"/>
            <Card.Body className="card-body text-dark">
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text className="card-text text-secundary">{props.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
                <ButtonLink target={props.btnTarget} variant={props.btnVariant} text={props.btnText} href={props.href}/>
            </Card.Footer>
        </Card>
    )
}