import React from 'react'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../pages/Main/style.css'
import '../Card/style.css'
import Popover from '../../components/Popover/Popover'
import ButtonLink from '../../components/Button/Button'

export default function OverlayTriggerDefault(props) {
const form = (
    <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Siga os passos abaixo:</Form.Label>
                <Form.Label>* Informar seu melhor E-mail;</Form.Label>
                <Form.Label>* Escolher o gênero do produto;</Form.Label>
                <Form.Label>* Informar o nome de um Produto Semelhante;</Form.Label>
                <Form.Label>* Clique em SALVAR;</Form.Label>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridProduto">
                <Form.Label>Produto</Form.Label>
                <Form.Control type="input" placeholder="Produto Semelhante" />
            </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} controlId="formGridGenero">
            <Form.Label>Gênero</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                <option>Livros...</option>
                <option>Cursos...</option>
                <option>Alimentos...</option>
            </Form.Control>
        </Form.Group>
  </Form.Row>
    <div className="card-footer text-center">
        <ButtonLink variant="danger" text="Salvar" type="submit"/>
    </div>
</Form>
)


    const popover = (
        <Popover 
          title="Receber Notificações" 
          as="h3" 
          content={ form }
          />
      );

    return (
        <OverlayTrigger trigger={['click', 'focus']}  overlay={ popover } key="left" placement="left" >
              {  props.element}
        </OverlayTrigger>
    )
}