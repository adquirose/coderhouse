import React from 'react'
// import { Link } from 'react-router-dom' 
import { Nav, NavContainer, Item, LinkStyled, Input, InputGroup, Button } from './styles.js'
import { ShoppingCart, Search } from '../Icons'

function Navbar(){
    return(
        <NavContainer>
            <LinkStyled to="/">LOGO</LinkStyled>
            <InputGroup>
                <Input placeholder="Buscar productos, marcas y más..."/>
                <Button
                    onClick={() => alert("click button")}
                >
                    <Search size="25" color="gray"/>
                </Button>
            </InputGroup>
            <Nav row="row1/bottom" column="col1/col2">
               <Item>
                   <LinkStyled to="/category/semillas">Semillas</LinkStyled>
                </Item>
                <Item>
                   <LinkStyled to="/category/plantas">Plantas</LinkStyled>
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
                    <LinkStyled to="/" >Ingresa</LinkStyled>
                </Item>
                <Item>
                    <LinkStyled to="/">
                        <ShoppingCart size="25" color="white"/>
                    </LinkStyled>
                </Item>
            </Nav>
        </NavContainer>
        
    )
}
export default Navbar