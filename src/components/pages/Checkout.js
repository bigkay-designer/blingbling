import React, {useEffect} from 'react'
import {useStateValue} from '../StateProvider'
import {Link, useHistory, useLocation} from 'react-router-dom'
import {Close, Delete} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import '../css/Checkout.css'
function Checkout() {
    const {pathname} = useLocation()
    let hitoryPathUrl = useHistory()

    const [{basket}, dispatch] = useStateValue()
    const removeItem = (e)=>{
        dispatch({

        })
    }

    let total = 0;

    const addToBasket = () => {
        basket.forEach(item=>{
            let result = total += item.price
            return result.toFixed(2)
        })
    }
    addToBasket()
    const topPage = ()=>{
        window.scrollTo(0, 0);
        hitoryPathUrl.goBack()
    }
    return (
        <div className="checkout">
            <div className="checkout__header">
                <div className="logo">
                    <h2><Link to="/">BLINGBLING</Link></h2>
                </div>
                <div onClick={topPage} className="icon__div">
                    <Close />
                </div>
            </div>
            <div className="title">
                <h3>Checkout - Your Bag</h3>
            </div>
            <div className="wrapper">
                {basket.map(data=>(
                    <div key={data.id} className="product">
                        <div className="product__flex">
                            <div className="img">
                                <img src={data.img} alt=""/>
                            </div>
                            <div className="product__body">
                                <h3>{data.title}</h3>
                                <p>item code: {data.div}</p>
                                <p>Quantity: {0}</p>
                                <p className="price">£{data.price}</p>
                            </div>
                            <div className="icon__div">
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
            <div className="total">
                <h3>Total: £{total}</h3>
            </div>
            <div className="paynow">
                <Button>Pay Now</Button>
            </div>
        </div>
    )
}

export default Checkout
