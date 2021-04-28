import React from 'react'
// import { Link } from 'react-router-dom' 
import { Nav, NavContainer, Item, Link, Input, InputGroup, Button } from './styles.js'
import { ShoppingCart, Search } from '../Icons'

function Navbar(){
    return(
        <NavContainer>
            <Link to="/">LOGO</Link>
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
                   <Link>Categorias</Link>
                </Item>
                <Item>
                   <Link>Ofertas</Link>
                </Item>
                <Item>
                   <Link>Productos</Link>
                </Item>
            </Nav>
            <Nav row="row1/bottom" column="col2/der">
                <Item>
                    <Link>Crear cuenta</Link>
                </Item>
                <Item>
                    <Link>Ingresa</Link>
                </Item>
                <Item>
                    <Link>
                        <ShoppingCart size="25" color="white"/>
                    </Link>
                </Item>
            </Nav>
        </NavContainer>
        
    )
}
export default Navbar