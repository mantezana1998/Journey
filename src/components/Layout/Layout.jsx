import { Outlet } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Layout(){
    return(
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Journey</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/features">Features</Nav.Link>
                        <Nav.Link href="/graphs">Graphs</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <Nav.Dropdown.Item href="/">Feature 1</Nav.Dropdown.Item>
                            <Nav.Dropdown.Item href="/">Feature 2</Nav.Dropdown.Item>
                            <Nav.Dropdown.Item href="/">Feature 3</Nav.Dropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        <footer>This is the footer</footer>
    </>
    )
}