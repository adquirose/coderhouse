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
        <Container className="pt-5">
            <Row className="pb-4">
                <h2 className="text-white text-center">Tus productos</h2>
            </Row>
            <Row className="justify-content-center">
                {cart.length ? (
                    <Fragment>
                        <Col md="9">
                            <Table className="bg-white">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Producto</th>
                                        <th>Valor</th>
                                        <th>Cantidad</th>
                                        <th>Sub total</th>
                                        <th>Borrar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cart.map( (item,index) => {
                                    const valor = formatter.format(item.price)
                                    const subTotal = formatter.format(item.price * item.quantity)
                                    const nuevoId = item.id.substring(0,6)
                                    return(
                                        <tr key={index}>
                                            <td>{nuevoId}</td>
                                            <td>{item.title}</td>
                                            <td>$ {valor}</td>
                                            <td>{item.quantity}</td>
                                            <td>$ {subTotal}</td>
                                            <td><Button className="btn btn-sm rounded-circle" onClick={() => removeItem(item.id)}><Remove size="25"/></Button></td>
                                        </tr>
                                    )}   
                                )}
                                </tbody>
                            </Table>
                        </Col>
                        
                            <Col className="pt-4" md="9">
                               <Row className="d-flex justify-content-start">
                                   <Col className="col-auto">
                                        <Button
                                            onClick={() => clear()}
                                        >
                                            Eliminar Carrito
                                        </Button>
                                   </Col>
                                   <Col className="col-auto">
                                        <Button
                                            tag={Link} to='/checkout'>
                                            Continuar Pago
                                        </Button>
                                   </Col>
                                   <Col>
                                        <p style={{fontSize:'1.5rem', textAlign:'end'}}>Total  ${total}</p>
                                    </Col>
                               </Row>
                            </Col>
                            
                        
                    </Fragment>
                ):( 
                    <Col>
                        <p>No hay Productos seleccionados para comprar</p>
                        <Link to="/"> 
                            <Button>Encuentra tu producto</Button>
                        </Link>
                    </Col>
                )}
            </Row>
        </Container>
    )
}
export default Cart

