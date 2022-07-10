import React from 'react';
import link from "react-router-dom"

const item =({item})=> {
    const urlitem = `/detalle/${item.id}`
    return (
        <div>
            <img src={item.img} alt='imagen' className='imgList'/>
            <h2>{item.name}</h2>
            <h3>{item-category}</h3>
            <span>$ {item.price}</span>
            <link to={urlItem}><button className='btn'>Ver productos</button></link>
        </div>
    )
}


export default item