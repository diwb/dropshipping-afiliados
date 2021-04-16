import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import ButtonLink from '../../components/Button/Button'

export default function jumbotronDefault(props){
    return(
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="header">
                    <div className="card-footer text-center text-white">
                        {props.header}
                    </div>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="title">
                    <ul>
                    {props.title.map((item, i) => {
                        return((i === 0) ? <li className="text-center"><Form.Label>{item}</Form.Label></li> : <li><Form.Label>{item}</Form.Label></li>)
                    })}
                    </ul>
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
            <Form.Control as="select" defaultValue="Nenhum...">
                    {props.genero.map(item => {
                        return(
                            <option id={item}>{item}</option>
                        )
                    })}
            </Form.Control>
        </Form.Group>
  </Form.Row>
    <div className="card-footer text-center">
        <ButtonLink variant="danger" text="Salvar" type="submit"/>
    </div>
</Form>
    )
}