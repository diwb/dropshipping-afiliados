import React, {Component} from 'react'

import Badge from '../../components/Badge/Badge'
import Card from '../../components/Card/Card'

import './style.css'
import arr from "../../data/data.json";

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

import 'bootstrap/dist/css/bootstrap.min.css';

class Products extends Component {
    state = {
        search: ""
      };    

      renderProducts = item => {    
        return (
          <div key={item.title} className="col-md-4" style={{ marginTop: "20px" }}>
          <Card key={item.title.toString()}
               src={item.src}
               title={item.title} 
               text={item.text}
               btnTarget="_blank" 
               btnVariant="danger" 
               btnText="Comprar" 
               href={item.href}
          />
          <br></br>
       </div>       
        )
      };

      onchange = e => {
        this.setState({ search: e.target.value });
      };
    
    render() {
        const { search } = this.state;
        const filteredProducts = arr.filter(tempData => {
          return tempData.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return(

          <div className="flyout">
          <main style={{ marginTop: "4rem" }}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <center>
                    <div className='header'>
                      <h2><Badge variant="dark" text="MELHORES PRODUTOS"/> <b>{'&'}</b> <Badge variant="dark" text="MELHORES OFERTAS"/></h2>
                    </div>
                  </center>
                </div>
                <div className="col-12">
                <center>
                    <InputGroup size="lg" className="mb-3" >
                          <InputGroup.Prepend>
                            <InputGroup.Text className="border" id="inputGroup-sizing-lg">Filtrar</InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl className="search-input" aria-describedby="basic-addon1" onChange={this.onchange}/>
                      </InputGroup>
                      </center>
                </div>
                <div className="col" />
              </div>
              <div className="row">
                {filteredProducts.map(tempData => {
                  return this.renderProducts(tempData);
                })}
                </div>
            </div>
          </main>
        </div>
      
        )    

      }
}

export default Products