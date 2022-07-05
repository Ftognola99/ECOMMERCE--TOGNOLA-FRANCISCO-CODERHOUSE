import {usestate} from 'react'
import item from '../item/item';

const itemCount =({stock, initial, onAdd}) => {
    const [count, setCount] = usestate(initial);
    const agregar = () => {
        if (count < stock){
            setCount (count + 1)

        }
    }

    const restar = ()  => {
        if( count > 1){
            setCount (count -1);
        }
    }

    return (
        <div>
            <button className='btn' onClick={restar}> Click aqui para restar!</button>
            <button className='btn' onClick={count}> Click aqui para sumar!! </button>
            <br/>
            <button className='btn' onClick={count}> Agregar al carrito!</button>

        </div>
    )

}

    export default itemCount