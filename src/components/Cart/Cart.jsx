import React from 'react';
import{link} from "react-router-dom"
import { CartContext } from '../../context/CartContext';
import item from '../item/item';

const Cart = () => {
    let total =0;
    const sumarItem = (item) => {
        let precio = item.price * item.cant;
        total = total + precio;
    }
}

return(
    <div className='cart'>
    <h1 className='cart__items' key= {item.id}>Cart</h1>

    {/* Cart.map((item)=> */}
    <img src={item.img} alt="imagen" Clasname="cart__Items--img"></img>
    <h2>{item.name}</h2>
    <span>$ {item.price}</span>
    <span>Cantidad:{item.cant}</span>
    {sumarItem(item)}
    <button className='btn' onClick={()=>eraseItemFromCart(item.id)}></button>
    
    </div>
)
