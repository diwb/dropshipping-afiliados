import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'
import '../../components/Card/style.css'

import Products from '../Products/Index'

import Navbar from '../../components/Navbar/Navbar'
import Container from '../../components/Container/Container'
import ButtonLink from '../../components/Button/Button'

import { AiOutlineBell } from "react-icons/ai";

import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'


export default function Page() {

    const form = (
<Jumbotron className="jumbotron">
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
</Jumbotron>
    )

   return(
        <div className="html">
            <Navbar/>
            <Container page={<Products/>}/>

            <footer>
            <div className="btn-whats"> 
                <OverlayTrigger trigger="click" placement="right" overlay={ form }>
                    <Button 
                     id="draggable" 
                     className="pulse-button">
                       {<AiOutlineBell 
                             className="pulse-btn"/> }
                     </Button>
                      
                </OverlayTrigger>
            </div>
              <p className="company-name"><b>Promo Fácil</b></p>
              
              <p>Copyright © 2021 
				        <em><a href="https://diwb.com.br"><b> DIWB - Do It With a Bot </b></a></em> 
				        &amp; 
				        <em><a href="https://diegossena.com.br"><b> Diego Sena </b></a></em>  
				         | Designed by 
				        <em><a href="https://diwb.com.br"><b> DIWB - Do It With a Bot </b></a></em>
				        &amp; 
				        <em><a href="https://diegossena.com.br"><b> Diego Sena</b></a></em>
			        </p>
          </footer>
        </div>
    )
}
