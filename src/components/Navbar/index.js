import React, { Fragment } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink, Button, Badge, InputGroup, Input } from 'reactstrap'
import { ShoppingCart, Search } from "../Icons";
import Logo from "../../assets/images/logo.png";
import { useCartContext } from '../CartContext'
import { useAuthContext } from '../Firebase/context'
import { Link } from 'react-router-dom'
function Navbar() {
	const { totalItems } = useCartContext()
	const { currentUser, signOut } = useAuthContext()
	const handleSignOut = () => {
		signOut().then(()=> {
			console.log('exit')
		})
	}
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
							{ !currentUser ? 
								<Fragment>
								<NavItem>
									<NavLink tag={Link} to="/signup">Crear cuenta</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} to="/signin">Ingresa</NavLink>
								</NavItem>
								</Fragment>
								
							:
								<Fragment>
									<NavItem>
										<NavLink tag={Link} to="/perfil">Mi Perfil</NavLink>
									</NavItem>
									<NavItem>
										<NavLink tag={Link} to="/favoritos">Favoritos</NavLink>
									</NavItem>
									<NavItem>
										<NavLink onClick={handleSignOut}>Salir</NavLink>
									</NavItem>
								</Fragment>
							}
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
