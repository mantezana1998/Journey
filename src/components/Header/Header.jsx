import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { MDBBtn } from 'mdb-react-ui-kit';
import './Header.css';

export default function Header (){
    /* return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Journey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/measurements">What We Record</Nav.Link>
                        <Nav.Link href="/contactus">Contact Us</Nav.Link>
                        {/* <NavDropdown title="Features" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="">Record Behaviors</NavDropdown.Item>
                            <NavDropdown.Item href="">See Progress</NavDropdown.Item>
                            <NavDropdown.Item href="">Graph progress</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">See Sample Sheet</NavDropdown.Item>
                        </NavDropdown> // Will be closing tag here if need to make changes}
                        </Nav>
                        <Nav>
                        <MDBBtn href="/signup">Start Journey</MDBBtn>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> //
        </>
    ) */

    return (
    <>
        <container>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/aboutus">About Us</a>
                </li>
                <li>
                    <a href="/measurements">Recordings</a>
                </li>
                <li>
                    <a href="/contactus">Contact Us</a>
                </li>
                <li>
                    <a class="active" href="/signup">Start Journey</a>
                </li>
            </ul>

        </container>
    </> 
    )
}