import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink, Button, Badge, InputGroup, Input } from 'reactstrap'
import { ShoppingCart, Search } from "../Icons";
import Logo from "../../assets/images/logo.png";
import { useCartContext } from '../CartContext'
import { Link } from 'react-router-dom'
function Navbar() {
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
						<Nav>
							<NavItem>
								<NavLink tag={Link} to="/category/semillas">Semillas</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/category/fungi">Fungi</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/category/arboles">Arboles</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col sm="6">
						<Nav>
							{ totalItems() ? 	
							<NavItem>
								<NavLink tag={Link} to="/cart">
									<Button color="primary">
										<ShoppingCart size="20" color="white"/> 
										<Badge color="secondary">{totalItems()}</Badge>
									</Button>
								</NavLink>
							</NavItem> : null
							}
						</Nav>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Navbar;
