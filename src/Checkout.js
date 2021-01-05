import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal.js" 
import {useStateValue} from "./StateProvider"

function Checkout() {
const [{ basket, user }, dispatch ] = useStateValue()

    return (
        <div className="checkout">
          <div className="checkout__left">
              <img
               className="checkout_ad"
             
               src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/AlexaBuiltinPhones/Ingress_Graphics/D19357478_WL_Alexa_Creatives_PC_1500.jpg'>
              </img>
              <div >
               <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">
                    Your shopping basket
                </h2>
                {basket.map(item =>(
                  <CheckoutProduct
                  id ={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating} />
                  ))}

                
              </div>
          </div>
          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
    )
}

export default Checkout 
