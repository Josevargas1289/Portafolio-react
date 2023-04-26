
import '../Nav-Bar/Navbar.css'
import { Container, Nav, Navbar } from 'react-bootstrap';





const NavbarPortafolio = () => {

    


    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='colorNav' fixed="top"  >
                <Container>
                    <Navbar.Brand className='home-iten' href="#"><i class='bx bxs-cool bx-spin bx-sm'  ></i>JV</Navbar.Brand>
                    

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav >
                        <Nav className='navbar-items'>

                            <Nav.Link eventKey={1} href='#servicios' className='home-icon firs-icon'>
                                Servicios
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#experience" className='home-icon'>
                                Habilidades
                            </Nav.Link>
                            <Nav.Link eventKey={3} href="#portafolio" className='home-icon'>
                                Portafolio
                            </Nav.Link>
                            <Nav.Link eventKey={4} href="#contacto" className='home-icon'>
                                Contacto
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavbarPortafolio;