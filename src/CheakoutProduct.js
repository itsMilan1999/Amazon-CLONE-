import React from 'react'
import Star from "@material-ui/icons/Star"
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheakoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        //remove from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })

    }
    return (

        <div className="checkoutProduct">

            <img className="checkoutProduct_image" src={image} alt="" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>

                </p>
                <div className="cheakoutProduct_rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p> <Star /></p>

                        ))
                    }

                    {/*Heare Array(rating).fill().map(rating,i)=>{} ///this syntext is also valid syntex */}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>

    )
}

export default CheakoutProduct
