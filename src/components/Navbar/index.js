import React from 'react'
import { Nav, NavContainer, Item, Link, Input, InputGroup, Button } from './styles.js'
// import PinUser from '../Icons/PinUser'
import Search from '../Icons/Search'
function Navbar(){
    return(
        <NavContainer>
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
            </Nav>
        </NavContainer>
        
    )
}
export default Navbar