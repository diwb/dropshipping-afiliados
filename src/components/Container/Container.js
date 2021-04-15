import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContainerDefault(props) {
    return(
        <Container fluid="md">
            <div className="align-items-center">
                {props.page}
            </div>
        </Container>
    )
}