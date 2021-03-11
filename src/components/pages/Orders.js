import React, {useState, useEffect} from 'react'
import {useStateValue} from '../StateProvider'
import {Close, Delete} from '@material-ui/icons'
import {db} from '../firebase'
import OrderHistory from '../OrderHistory'
import '../css/Orders.css'
function Orders() {
    const [orders, setOrders] = useState([])
    const [{basket}, dispatch] = useStateValue()
    const [newBasket, setNewBasket] = useState([])

    useEffect(() => {
        db.collection('orders')
        .orderBy('created', "desc")
        .onSnapshot(snapShot=>{
            setOrders(snapShot.docs.map(doc=>({
                id: doc.id,
                data: doc.data()
            })))
        })
        // orederHistory() 
    }, [])

    const orederHistory = () =>{
    }

    const removeFromBasket = (id) =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }
    
    return (
        <div className="orders">
            <div className="title">
                <h3>order histort</h3>
            </div>
            <div className="wrapper">
                {orders?.map(order=>(
                    <div key={order.id} className="product">
                        <OrderHistory id={order.id} order={order.data.basket} amount={order.data.amount / 100} date={order.data.created} />
                    </div>                    
                ))}
            </div>
        </div>
    )
}

export default Orders
