import React, { Fragment } from 'react'
import { useCartContext } from '../CartContext'
import { Container, Row, Col, Table, Button } from 'reactstrap'
import { Remove } from '../Icons'
import { Link } from 'react-router-dom'

function Cart(){
    const { cart, removeItem, clear, totalCompra } = useCartContext()
    const formatter = new Intl.NumberFormat('de-DE', {})
    const total = formatter.format(totalCompra())
    return(
        <Container>
            <Row>
                <h2>Tus productos</h2>
            </Row>
            <Row>
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
                                    const valor = formatter.format(item.price)
                                    const subTotal = formatter.format(item.price * item.quantity) 
                                    return(
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>$ {valor}</td>
                                            <td>{item.quantity}</td>
                                            <td>$ {subTotal}</td>
                                            <td><Button className="btn btn-sm rounded-circle" onClick={() => removeItem(item.id)}><Remove size="25"/></Button></td>
                                        </tr>
                                    )
                                }
                                    
                                )}
                            </tbody>
                        </Table>
                        <Row>
                            <Col md="9">
                               <div>
                                    <Button
                                        onClick={() => clear()}>
                                           
                                            Eliminar Carro
                                    </Button>
                                    <Button tag={Link} to='/checkout'>
                                        Continuar Pago
                                    </Button>
                               </div>
                            </Col>
                            <Col md="3">
                                <p>Total  ${total}</p>
                            </Col>
                        </Row>
                    </Fragment>
                ):( 
                    <Col>
                        <p>No hay Productos seleccionados para comprar</p>
                        <Link to="/"> 
                            <Button>Encuentra tu producto</Button>
                        </Link>
                    </Col>
                )
                }
            </Row>
        </Container>
    )
}
export default Cart

