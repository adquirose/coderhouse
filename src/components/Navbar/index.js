import React, { useState } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink, Button, Badge, InputGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { ShoppingCart, Search } from "../Icons";
import Logo from "../../assets/images/logo.png";
import { useCartContext } from '../CartContext'
import { Link } from 'react-router-dom'
function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const toggle = () => setDropdownOpen(prevState => !prevState)

	const { totalItems } = useCartContext()
	return (
		<div style={{background:'#1B998B'}}>
			<Container>
				<Row className="align-items-center">
					<Col>
						<Link to="/">
							<img
								src={Logo}
								alt="logo"
								style={{
									height: "50px",
									paddingTop: "10px",
									paddingLeft: "0",
								}}
							/>
						</Link>
					</Col>
					<Col sm="6">
						<InputGroup>
							<Input placeholder="Buscar semillas, hongos y más..." />
							<Button onClick={() => alert("click button")}>
								<Search size="25" color="white"/>
							</Button>
						</InputGroup>
					</Col>
				</Row>
				<Row className="justify-content-between">
					<Col sm="6">
						<Nav className="justify-content-end">
							<NavItem>
								<NavLink className="text-white">
									Ofertas
								</NavLink>
							</NavItem>
							<Dropdown isOpen={dropdownOpen} toggle={toggle}>
								<DropdownToggle caret>
									Categorias
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem tag={Link} to="/category/arboles">Arboles</DropdownItem>
									<DropdownItem tag={Link} to="/category/fungi">Funji</DropdownItem>
									<DropdownItem tag={Link} to="/category/semillas">Semillas</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</Nav>
					</Col>
					<Col sm="6">
						<Nav className="justify-content-end">
							<NavItem>
								<NavLink className="text-white">
									Ingresa
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="text-white">
									Crear Cuenta
								</NavLink>
							</NavItem>
							<NavItem>
								{ totalItems() ? 	
									<NavLink className="pt-0" tag={Link} to="/cart">
										<Button color="primary">
											<ShoppingCart size="20" color="white"/> 
											<Badge color="secondary">{totalItems()}</Badge>
										</Button>
									</NavLink>:
									null
								}
							</NavItem> 
							
						</Nav>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Navbar;
