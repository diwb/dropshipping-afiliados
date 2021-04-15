import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default function NavbarDefault() {
    return(
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="#home">Promo Fácil</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}