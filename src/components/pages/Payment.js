import React, {useState, useEffect} from 'react'
import {useStateValue} from '../StateProvider'
import {Close, Delete} from '@material-ui/icons'
import { getBasketTotal } from "../reducer";

import '../css/Payment.css'
import { Button } from '@material-ui/core'
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
function Payment() {

    const [newBasket, setNewBasket] = useState([])
    const [{basket}, dispatch] = useStateValue()
    let totalValue = getBasketTotal(basket).toFixed(2)

    const stripe = useStripe()
    const elemets = useElements()


    useEffect(()=>{
        let result = []
        const mapEl = new Map()
        for (const item of basket){
            if(!mapEl.has(item.title)){
                mapEl.set(item.title, true);
                result.push({
                    id:item.id,
                    title:item.title,
                    price:item.price,
                    img: item.img,
                    body:item.body,
                    quantity: item.quantity
                })
            }
        }
        setNewBasket(result)
    }, [basket])

    const removeFromBasket = (id) =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }

    const handleSubmit = (e) => {

    }


    return (
        <div className="payment">
            <div className="checkout__amount">
                <h3>checkout <span>{basket?.length} items</span></h3>
            </div>
            <div className="payment__container">
                <div className="address payment__section">
                    <h3>Delivery address</h3>
                    <div className="payment__body">
                        <p>kay@gmail.com</p>
                        <p>123 street lane</p>
                        <p>London</p>
                    </div>
                </div>
                <div className="review__items payment__section">
                    <h3>Review items and delivery</h3>
                    <div className="wrapper">
                        {newBasket.map(data=>(
                            
                            <div key={data.id} className="product">
                                <div className="product__flex">
                                    <div className="img">
                                        <img src={data.img} alt=""/>
                                    </div>
                                    <div className="product__body">
                                        <h3>{data.title}</h3>
                                        <p>item code: {data.id}</p>
                                        <p>Quantity: {data.quantity}</p>
                                        <p className="price">£{data.price}</p>
                                    </div>
                                    <div onClick={()=> removeFromBasket(data.id)} className="icon__div">
                                        <Delete />
                                    </div>
                                </div>
                                <div className="product__size">
                                    <select name="size">
                                        <option >Choose Size</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                </div>
                            </div>
                            
                        ))}
                     </div>
                </div>
                <div className="payment__method payment__section">
                    <h3>payment Method</h3>
                    <div className="payment__body">
                        <form onSubmit={handleSubmit}>
                            <CardElement />
                            {/* <input type="number" required placeholder="Card number" />
                            <div className="date">
                                <input type="number" required placeholder="MM/YY" />
                                <input type="number" required placeholder="CVC" />
                            </div> */}
                            <div className="pay__btn">
                                <div className="total">
                                    <h3>Order Total: <span>{totalValue}</span> </h3>
                                </div>
                                <Button>But now</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
