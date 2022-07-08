import react, {useState, createContext} from 'react'

export const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const isInCartContext = (id) =>{
        return cart.some(item=> item.id===id);
    }


const addToCart = (item, cant) =>{
    if(isInCartContext(item.id)===false){
        setCart([...cart,{item, cant}])
    }
}

const clearCart = () =>{
    setCart([]);
}

const totalItemsInCart = () =>{
    let total = 0;
    cart.foreach((item)=>{
        let precio = item.cant * item.price;
        total=total+precio;
    })
    return total
}

const eraseItemFromCart = (id) => {
    let newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)

}

return <cartContext.Provider value={{cart, addToCart, isInCartContext, clearCart, totalItemsInCart, eraseItemFromCart}}>
    {children}
</cartContext.Provider>

}








