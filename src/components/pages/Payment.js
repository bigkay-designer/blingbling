import React, {useState, useEffect} from 'react'
import axios from '../axios'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {Close, Delete} from '@material-ui/icons'
import { getBasketTotal } from "../reducer";
import {db} from '../firebase'
import '../css/Payment.css'
import { Button } from '@material-ui/core'
import {CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
function Payment() {
    let hitoryPathUrl = useHistory()
    const [newBasket, setNewBasket] = useState([])
    const [{basket}, dispatch] = useStateValue()
    let totalValue = getBasketTotal(basket).toFixed(2)

    const stripe = useStripe()
    const  [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const elements = useElements()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    // console.log('the secret is', clientSecret)

    useEffect(()=>{
       let filteredBasket = basket.filter((el,i,a)=> a.findIndex(item => el.size === item.size && el.title === item.title)=== i)
        setNewBasket(filteredBasket)
    }, [basket])

    const removeFromBasket = (id) =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // paymentIntent = payment confirmation

            db.collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type:"EMPTY_BASKET"
            })
            
            hitoryPathUrl.replace('/orders')
        })


    }

    const handleChange = (event) => {
        // listen fot changes in CardElements
        // display any errors as the customer types their card details.
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "");
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
                                        <p>Size: {data.size}</p>
                                        <p className="price">£{data.price}</p>
                                    </div>
                                    <div onClick={()=> removeFromBasket(data.id)} className="icon__div">
                                        <Delete />
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                     </div>
                </div>
                <div className="payment__method payment__section">
                    <h3>payment Method</h3>
                    <div className="payment__body">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="pay__btn">
                                <CurrencyFormat 
                                    renderText={(value)=>(
                                        <>
                                            <h3>Order Total: <span>{value}</span> </h3>
                                        </>      
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"£"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
