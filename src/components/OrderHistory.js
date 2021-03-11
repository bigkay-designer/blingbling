import React, {useState, useEffect} from 'react'
import moment from 'moment'

function OrderHistory({id,order, date, amount}) {
    const [filteredOrder, setFilteredOrder] = useState()
    
    useEffect(() => {
        let result = []
        const elMap = new Map
        for(const item of order){
            if(!elMap.has(item.title)){
                elMap.set(item.title, true)
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
        setFilteredOrder(result)
    
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
