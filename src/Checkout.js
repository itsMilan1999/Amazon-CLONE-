import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import CheakoutProduct from './CheakoutProduct'
import Subtotal from "./Subtotal"
import CurrencyFormat from 'react-currency-format';


function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className="chekout">
            <div className="chekout_left">
                <img className="checkout_ad"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThFuzrDrd1hFiFKMx09MXVOnKYkoj0a4mkmg&usqp=CAU"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Amazon Cart is empty</h2>
                        <p>You have no iream in youur basket</p>
                        <small> The Cart is a temporary place to store a list of your items and reflects each item's most recent price</small>

                    </div>
                ) : (
                        <div className="cheakout_title">
                            <h2>Your Shopping Basket</h2>
                            {/* list out the bunck of prodects*/}
                            {basket?.map(item => (

                                <CheakoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}

                                />
                            ))}

                        </div>

                    )}
            </div>
            {basket.length > 0 && (
                <div className="cheakout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
