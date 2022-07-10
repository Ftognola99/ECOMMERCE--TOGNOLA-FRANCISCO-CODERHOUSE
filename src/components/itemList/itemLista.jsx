import react from 'react'
import item from '../item/item'


const ItemList =({items}) => {
    return (
        <div className='itemListContainer__itemList grid grid-cols-3'>
            {items.map((item)=(
                <Item key={item.id} Item={item}/>
            ))
            }
        </div>
    );
}


export default ItemList;