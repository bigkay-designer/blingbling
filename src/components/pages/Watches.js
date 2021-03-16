import React from 'react'
import {Search} from '@material-ui/icons'
import Product from '../Product'
function Watches() {
    return (
        <div className="product__pages watches">
            <section className="product__banner">
                <img src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
            </section>
            <div className="current__link">
                <span>watches</span>
            </div>
            <section className="product__filter">
                <button>Sort</button>
                <button>Filter</button>
            </section>
            <section className="products__container">
                <Product  
                    id='929332929'
                    img="https://i.pinimg.com/originals/fb/8b/42/fb8b42615e4d653c3b094544c32a8fbf.png"
                    price={99.99}
                    title="Gucci"
                    body="dolor sit amet consectetur adipisicing elit. Odio, incidunt."
                />
            </section>
        </div>
    )
}

export default Watches
