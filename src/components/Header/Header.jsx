import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Header (){
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Journey</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="">About Us</Nav.Link>
                    <Nav.Link href="">Solutions</Nav.Link>
                    <NavDropdown title="Features" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="">Record Behaviors</NavDropdown.Item>
                        <NavDropdown.Item href="">See Progress</NavDropdown.Item>
                        <NavDropdown.Item href="">Graph progress</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">See Sample Sheet</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}