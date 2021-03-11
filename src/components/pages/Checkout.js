import React, {useState, useEffect} from 'react'
import {useStateValue} from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from "../reducer";
import {Link, useHistory, useLocation} from 'react-router-dom'
import {Close, Delete} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import '../css/Checkout.css'
function Checkout() {
    const [newBasket, setNewBasket] = useState([])
    const [selectValue, setSelectValue] = useState('')

    const {pathname} = useLocation()
    let hitoryPathUrl = useHistory()
    const topPage = ()=>{
        window.scrollTo(0, 0);
        hitoryPathUrl.goBack()
    }

    const [{basket}, dispatch] = useStateValue()

    const handleSelectChange = (e)=>{
        setSelectValue(e.target.value)
        console.log(e.target.value)
    }
    
    

    const removeFromBasket = (id) =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }

    
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
                    quantity: item.quantity,
                    size: selectValue
                })
            }
        }
        setNewBasket(result)
    }, [basket])

    const handlePayment = () => {
        hitoryPathUrl.push('/payment')
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
                            <div onClick={()=> removeFromBasket (data.id)} className="icon__div">
                                <Delete />
                            </div>
                        </div>
                        <div className="product__size">
                            <select onChange={handleSelectChange} value={selectValue} name="size" required>
                                <option >Choose Size</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        {data.size}
                    </div>
                    
                ))}
            </div>
            <div className="total">
            <CurrencyFormat 
                renderText={(value)=>(
                    <>
                        <h3>Total: <span>{value}</span> </h3>
                    </>      
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            </div>
            <div onClick={handlePayment} className="paynow">
                <Button>Pay Now</Button>
            </div>
        </div>
    )
}

export default Checkout
