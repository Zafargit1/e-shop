import React from 'react'
import './Newsletter.css'


const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Get 10% Discount Code</h1>
            <p>By signing up for news, you will receive a -10% discount code for your first order, as well as news about the latest fashion trends.</p>
            <div>
                <input type="email" placeholder='Your email id'/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter