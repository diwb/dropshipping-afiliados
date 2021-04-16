import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function jumbotronDefault(props){
    return(
        <Jumbotron>
            {props.element}
        </Jumbotron>
    )
}