import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img 
                    className='checkout__ad' 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    // "https://images-eu.ssl-images-amazon.com/images/G/31/Manjula/Phase3_Multibank_offer/1500x300_desk_header_Main_new.jpg"
                    alt="" />
            
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>

                {basket.map(item => (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}                    
                    />
                ))}

                
                {/* Checkout Product */}
                {/* Checkout Product */}
                {/* Checkout Product */}
                {/* Checkout Product */}

            </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
