import React, { Fragment, useContext } from 'react'
import { CartContext } from '../CartContext'
import { CartContainerStyle, Table, ButtonGroup, Button, Texto, H2, Section} from './styles'
import { Remove, ClearCart, Money } from '../Icons'

function Cart(){
    const { cart, removeItem, clear, totalCompra } = useContext(CartContext)
    const formatter = new Intl.NumberFormat('de-DE', {})
    const total = formatter.format(totalCompra())
    return(
        <CartContainerStyle>
            <H2>Tus productos</H2>
            {cart.length ? (
                <Fragment>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre Producto</th>
                                <th>Valor Unidad</th>
                                <th>Cantidad</th>
                                <th>Sub total</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map( (item,index) => {
                                const valor = formatter.format(item.valor)
                                const subTotal = formatter.format(item.valor * item.quantity) 
                                return(
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>$ {valor}</td>
                                        <td>{item.quantity}</td>
                                        <td>$ {subTotal}</td>
                                        <td><Button onClick={() => removeItem(item.id)}><Remove size="40"/></Button></td>
                                    </tr>
                                )
                            }
                                
                            )}
                        </tbody>
                    </Table>
                    <Section>
                        <ButtonGroup >
                            <Button buttonIcon color="white" bg onClick={() => clear()}><ClearCart size="30" color="white"/>Eliminar Carro</Button>
                            <Button buttonIcon color="white" bg><Money size="30" color="white"/>Continuar Pago</Button>
                        </ButtonGroup>
                        <Texto color="gray" column="col1/der" row="top/bottom" size="2.25rem">Total  ${total}</Texto>
                    </Section>
                </Fragment>
            ):(
                <Texto color="white" size="2rem" column="col1/col2">No hay Productos seleccionados para comprar</Texto>
            )
            }
        </CartContainerStyle>
    )
}
export default Cart

