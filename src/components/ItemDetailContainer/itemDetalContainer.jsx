import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetal';
import listaProductos from '../../data/productList.json';
import {useParams} from "react-router-dom";


const ItemDetailContainer = () => {
    const {id} = useParams ();
    const [producto, setProducto] = useState([]);
    useEffect(()=>{
        const buscarItem = listaProductos.find(obj =>{
            return obj.id === parseInt(id);
        })
        const importarProducto = new Promise((res)=> {
            setTimeout(()=>{
                res(buscarItem);
            }, 1000);
        });
        importarProducto.then((res)=>{
            setProducto(res);
        });
    }, [id]);
    return (
        <div classname="itemDetail">
            <ItemDetail item={producto}/>
        </div>

    )
}


export default ItemDetailContainer