import React, {useState, useEffect} from 'react'
import moment from 'moment'

function OrderHistory({id,order, date, amount}) {
    const [filteredOrder, setFilteredOrder] = useState()
    
    useEffect(() => {
        let filteredBasket = order.filter((el,i,a)=> a.findIndex(item => el.size === item.size && el.title === item.title)=== i)
        setFilteredOrder(filteredBasket)
    
    }, [])

    return (
        <div className="order">
            <p className="date">{moment.unix(date).format("MMMM Do YYYY, h:mma ")}</p>
            {
                filteredOrder?.map(order => (
                    <div className="product__flex">
                        <div className="img">
                            <img src={order.img} alt=""/>
                        </div>
                        <div className="product__body">
                            <h3>{order.title}</h3>
                            <p>item code: {order.id}</p>
                            <p>Quantity: {order.quantity}</p>
                            <p>Size: {order.size}</p>
                            <p className="price">£{order.price}</p>
                        </div>
                    </div>
                ))
            }
            <h3 className="total">Total : £<span>{amount}</span></h3>
        </div>
    )
}

export default OrderHistory
