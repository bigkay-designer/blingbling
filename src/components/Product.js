import React, {useState} from 'react'
import {useStateValue} from './StateProvider'
import {FavoriteBorder} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import './css/Product.css'
function Product({id, img, title, price,body}) {
    const [selectValue, setSelectValue] = useState('')

    
    const handleSelectChange = (e)=>{
        setSelectValue(e.target.value)
    }

    const [{basket}, dispatch] = useStateValue()
    // console.log('this is the ', basket)
    const addToBasket = (e)=>{
        e.preventDefault()
        // dispatch the item in to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                img:img,
                body: body, 
                price: price,
                quantity: 1,
                size: selectValue
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
                <form onSubmit={addToBasket}>
                    <div className="product__size">
                        <select onChange={handleSelectChange} value={selectValue} name="size" required>
                            <option required>Choose Size</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                    <div className="add__to__basket">
                        <Button type="submit">add to basket</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
