import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'
import Login from './Login'
import { useHistory } from "react-router-dom";

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch ] = useStateValue();
    const [ {user }] = useStateValue();
    const history = useHistory();
    

    const addToBasket = () =>{
        //dipatch the items into the data layer
        if (user) {

            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating
                },
            })

        } else {
           alert('Please login to parchase')
            history.push('/Login')
        }
      
    }

    return (
        <div className='product'>
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price"></p>
            <small>$</small>
            <strong>{price}</strong>
            <div className="product__rating">
               {Array(rating).fill().map((_, i) =>(
                   <p>🌟</p>
               ))} 
            
            </div>
            </div>
             <img src={image}></img>

             <button onClick= {addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
