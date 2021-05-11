import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext()

export default function CartContextProvider({ children }){

    const [cart, setCart] = useState([])
    
    const isInCart = id => cart.includes( producto => producto.id === id)
    
    const addItem = (item, quantity) => {
        isInCart(item.id) ? 
            setCart([]) :
            setCart([...cart,{item,quantity}]) 
    }
    const removeItem = (itemId) => {

    }
    const clear = () => {
        setCart([])
    }

    useEffect(() => {
        console.log(cart)
    },[cart])

	
    return(
        <CartContext.Provider value={[addItem]}>
            {children}
        </CartContext.Provider>
    )
}