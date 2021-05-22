import React, { useContext } from "react";
import { Nav, NavContainer, Item, LinkStyled } from "./styles.js";
import { Button, Badge, InputGroup, Input } from 'reactstrap'
import { ShoppingCart, Search } from "../Icons";
import Logo from "../../assets/images/logo.png";
import { CartContext } from '../CartContext'

function Navbar() {
	const { totalItems } = useContext(CartContext)
	
	return (
		<NavContainer>
			<LinkStyled to="/">
				<img
					src={Logo}
					alt="logo"
					style={{
						height: "70px",
						paddingTop: "25px",
						paddingLeft: "25px",
					}}
				/>
			</LinkStyled>
			<InputGroup>
				<Input placeholder="Buscar semillas, hongos y más..." />
				<Button onClick={() => alert("click button")}>
					<Search size="25" color="white"/>
				</Button>
			</InputGroup>
			<Nav row="row1/bottom" column="col1/col2">
				<Item>
					<LinkStyled to="/category/semillas">Semillas</LinkStyled>
				</Item>
				<Item>
					<LinkStyled to="/category/fungi">Fungi</LinkStyled>
				</Item>
				<Item>
					<LinkStyled to="/category/arboles">Arboles</LinkStyled>
				</Item>
			</Nav>
			<Nav row="row1/bottom" column="col2/der">
				<Item>
					<LinkStyled to="/">Crear cuenta</LinkStyled>
				</Item>
				<Item>
					<LinkStyled to="/">Ingresa</LinkStyled>
				</Item>
				{ totalItems() ? 
					<Item>
						<LinkStyled to="/cart">
							<Button color="primary">
								<ShoppingCart size="20" color="white"/> 
								<Badge color="secondary">{totalItems()}</Badge>
							</Button>
						</LinkStyled>
					</Item> : null
				}
				
			</Nav>
		</NavContainer>
	);
}
export default Navbar;
