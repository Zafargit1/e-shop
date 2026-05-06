import React, { useState }from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { useEffect } from 'react';
import { backend_url } from '../../App';

const Popular = () => { 

    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const fetchPopularProducts = async () => {
            const response = await fetch(`${backend_url}/popularinwomen`);
            const data = await response.json();
            setPopularProducts(data);
        };
        fetchPopularProducts();
    }, []); 

    return(
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular;