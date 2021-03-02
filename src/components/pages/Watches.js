import React from 'react'
import {Search} from '@material-ui/icons'
import Product from '../Product'
function Watches() {
    return (
        <div className="product__pages watches">
            <section className={`search`}>
                <form >
                    <div className="input__field">
                        <Search className="icon" />
                        <input type="text" placeholder="Search for keyword, brand or product" />
                    </div>
                </form>
            </section>
            <section className="watches__banner">
                <img src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
            </section>
            <div className="current__link">
                <span>watches</span>
            </div>
            <section className="product__filter">
                <button>Sort</button>
                <button>Filter</button>
            </section>
            <Product  
                id='9292929'
                img="https://i.pinimg.com/originals/fb/8b/42/fb8b42615e4d653c3b094544c32a8fbf.png"
                price={99.99}
                title="Gucci"
                body="dolor sit amet consectetur adipisicing elit. Odio, incidunt."
            />
        </div>
    )
}

export default Watches
