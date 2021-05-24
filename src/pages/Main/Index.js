import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'
import '../../components/Card/style.css'

import Products from '../Products/Index'

import Navbar from '../../components/Navbar/Navbar'
import Container from '../../components/Container/Container'
import Form from '../../components/Form/Form'
import OverlayTrigger from '../../components/OverlayTrigger/OverlayTrigger'

import { AiOutlineBell } from "react-icons/ai";

import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Page() {
    const jumbotron = (
        <Jumbotron className="jumbotron">
             <Form
            header="RECEBER NOTIFICAÇÕES"
            title={[<b>SIGA OS PASSOS ABAIXO</b>
                ,'* Informar seu melhor E-mail;'
                ,'* Escolher o gênero do produto;'
                ,'* Informar o nome de um Produto Semelhante;'
                ,'* Clique em SALVAR;']}
            genero={["Livros..."
                ,"Cursos..."
                ,"Alimentos..."]}
            />
        </Jumbotron>
            )
    return(
        <div className="html">
            <Navbar/>
            <Container page={<Products/>}/>

            <footer>
            <div className="btn-whats"> 
                <OverlayTrigger 
                    overlay={ jumbotron } 
                    placement="right" 
                    element= {
                        <Button 
                            id="draggable" 
                            className="pulse-button">
                                {<AiOutlineBell className="pulse-btn"/> }
                        </Button>} 
                /> 
            </div>
              <p className="company-name"><b>Promo Hub</b></p>
              
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
