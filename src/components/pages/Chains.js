import React from 'react'
import {Button} from '@material-ui/core'
import Product from '../Product'
function Watches() {
    return (
        <div className="product__pages chains">
            <section className="product__banner">
                <img src="http://www.2020pv.co.uk/wp-content/uploads/2018/05/Jewellery_Blue-Christmas.jpg" alt=""/>
            </section>
            <div className="current__link">
                <span>chains</span>
            </div>
            <section className="product__filter">
                <button>Sort</button>
                <button>Filter</button>
            </section>
            <section className="products__container">
                <Product  
                    id='9292929'
                    img="http://pngimg.com/uploads/necklace/necklace_PNG129.png"
                    price={20.99}
                    title="Classing Casio casio"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt."
                />
                <Product  
                    id='9292929'
                    img="http://pngimg.com/uploads/necklace/necklace_PNG129.png"
                    price={20.99}
                    title="Classing Casio casio"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt."
                />
                <Product  
                    id='9292929'
                    img="http://pngimg.com/uploads/necklace/necklace_PNG129.png"
                    price={20.99}
                    title="Classing Casio casio"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt."
                />
                <Product  
                    id='9292929'
                    img="http://pngimg.com/uploads/necklace/necklace_PNG129.png"
                    price={20.99}
                    title="Classing Casio casio"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt."
                />
            </section>

        </div>
    )
}

export default Watches
