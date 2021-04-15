import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'

import Products from '../Products/Index'

import Navbar from '../../components/Navbar/Navbar'
import Container from '../../components/Container/Container'
import OverlayTrigger from '../../components/OverlayTrigger/OverlayTrigger'

import { AiOutlineBell } from "react-icons/ai";

import Button from 'react-bootstrap/Button'

export default function Page() {
    return(
        <div className="html">
            <Navbar/>
            <Container page={<Products/>}/>

            <footer>
            <div className="btn-whats"> 
                <OverlayTrigger
                   element={({ ref, ...triggerHandler }) => (
                    <Button 
                     id="draggable" 
                     className="pulse-button"
                     {...triggerHandler}>
                       {<AiOutlineBell 
                             className="pulse-btn"/> }
                     </Button> 
                    )}>
                      
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
