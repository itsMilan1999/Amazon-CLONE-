import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import getBasketTotal from "./reducer"
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="subtotal">

            {/*price calculation*/}

            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            subtotal ({basket.length} items):<strong>{`${value}`}</strong>
                        </p>
                        <small className="sybtotal_gift">
                            <input type="checkbox" />This order contains gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Cheakout</button>

        </div>
    )
}

export default Subtotal
