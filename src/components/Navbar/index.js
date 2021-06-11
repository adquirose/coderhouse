import React, { useState } from "react";
import { Search } from "../Icons";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import {
	Container,
	Row,
	Col,
	Nav,
	NavItem,
	NavLink,
	Button,
	InputGroup,
	Input,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";


function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);
	return (
		<div style={{ background: "#1B998B" }}>
			<Container>
				<Row className="align-items-center">
					<Col className="mt-2">
						<Link className="text-decoration-none" to="/">
							<span className="text-white fs-3 fw-bold mb-2">MercadoFungi</span>
						</Link>
					</Col>
					<Col className="mt-2" sm="6">
						<InputGroup size="sm">
							<Input placeholder="Buscar semillas, hongos y más..." />
							<Button onClick={() => alert("click button")}>
								<Search size="25" color="white" />
							</Button>
						</InputGroup>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col sm="6">
						<Nav className="justify-content-end">
							<NavItem>
								<NavLink className="text-white">Ofertas</NavLink>
							</NavItem>
							<Dropdown isOpen={dropdownOpen} toggle={toggle}>
								<DropdownToggle caret>Categorias</DropdownToggle>
								<DropdownMenu>
									<DropdownItem tag={Link} to="/category/arboles">
										Arboles
									</DropdownItem>
									<DropdownItem tag={Link} to="/category/fungi">
										Funji
									</DropdownItem>
									<DropdownItem tag={Link} to="/category/semillas">
										Semillas
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</Nav>
					</Col>
					<Col sm="6">
						<Nav className="justify-content-end">
							<NavItem>
								<NavLink className="text-white">Ingresa</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="text-white">Crear Cuenta</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="pt-0">
									<CartWidget />
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Navbar;
