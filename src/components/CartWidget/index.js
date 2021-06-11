import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Badge } from 'reactstrap'
import { ShoppingCart } from '../Icons'
import { useCartContext } from '../CartContext'
function CartWidget(){
    const { totalItems } = useCartContext();
    return(
        <Button tag={Link} to="/cart" color="primary">
			<ShoppingCart size="20" color="white" />
			<Badge color="secondary">{ totalItems() > 0 && totalItems()}</Badge>
		</Button>
    )
}
export default CartWidget