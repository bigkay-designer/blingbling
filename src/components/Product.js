import React from 'react'
import {useStateValue} from './StateProvider'
import {FavoriteBorder} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import './css/Product.css'
function Product({id, img, title, price,body}) {

    const [{basket}, dispach] = useStateValue()

    // console.log('this is the ', basket)
    const addToBasket = ()=>{
        // dispatch the item in to the data layer
        dispach({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                img:img,
                body: body, 
                price: price
            }
        })
    }

    return (
        <div className="products__container">
            <div className="products">
                <div className="icon__div">
                    <FavoriteBorder className="icon" />
                </div>
                <div className="img">
                    <img src={img} alt=""/>

                </div>
                <div className="product__body">
                    <span className="price">£{price}</span>
                    <h3 className="product__title">{title}</h3>
                    <p className="product__desc">{body}</p>
                </div>
                <div onClick={addToBasket} className="add__to__basket">
                    <Button>add to basket</Button>
                </div>
            </div>
        </div>
    )
}

export default Product
