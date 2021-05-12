import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { CartContainerStyle, Table, Td, Button, Texto} from './styles'
import Remove from '../Icons/Remove'
function Cart(){
    const { cart, removeItem } = useContext(CartContext)
    return(
        <CartContainerStyle>
            <h2>Tus productos</h2>
            {cart.length ? (
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
                        {cart.map( (item,index) => 
                            <tr key={index}>
                                <Td>{item.id}</Td>
                                <Td>{item.name}</Td>
                                <Td>{item.valor}</Td>
                                <Td>{item.quantity}</Td>
                                <Td>{item.quantity * item.valor}</Td>
                                <Td><Button onClick={() => removeItem(item.id)}><Remove size="40"/></Button></Td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            ):(
                <Texto>No hay Productos seleccionados para comprar</Texto>
            )
            }
        </CartContainerStyle>
    )
}
export default Cart

