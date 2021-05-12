import React, { useEffect, useState } from "react";

export const CartContext = React.createContext([]);

export default function CartContextProvider({ defaultValue = [], children }) {
	const [cart, setCart] = useState(defaultValue);

	const isInCart = (id) => {
		const enCart = cart.find(producto => producto.id === id)
        if(!enCart){
            return false
        }else{ return true }
	};
    
    const getQuantity=(item,count)=>{
        const filtro = [...cart];
          filtro.forEach(i => {
            if(i.id === item.id){
              console.log(`se agregaron ${count} productos`)
               i.quantity += count  
              }  
          })
        setCart(filtro);
      } 
	const addItem = (item, count) => {
        isInCart(item.id) ? 
            getQuantity(item, count)
            : 
            setCart([...cart, {...item, quantity: count}]);		
	};
	const removeItem = (id) => {
    const cartFiltrado = cart.filter(item => item.id !== id)
    setCart(cartFiltrado)
  };
	const clear = () => {
		setCart([]);
	};

	useEffect(() => {
        console.log('productos en el cart:',cart)
    }, [cart]);

	return (
		<CartContext.Provider value={{cart, addItem, removeItem, clear}}>{children}</CartContext.Provider>
	);
}
