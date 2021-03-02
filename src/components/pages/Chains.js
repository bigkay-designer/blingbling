import React from 'react'
import {Search,FavoriteBorder} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import Product from '../Product'
function Watches() {
    return (
        <div className="product__pages chains">
            <section className={`search`}>
                <form >
                    <div className="input__field">
                        <Search className="icon" />
                        <input type="text" placeholder="Search for keyword, brand or product" />
                    </div>
                    {/* <div className="search__btn">
                        <Button>Search</Button>
                    </div> */}
                </form>
            </section>
            <section className="watches__banner chain__banner">
                <img src="http://www.2020pv.co.uk/wp-content/uploads/2018/05/Jewellery_Blue-Christmas.jpg" alt=""/>
            </section>
            <div className="current__link">
                <span>chains</span>
            </div>
            <section className="product__filter">
                <button>Sort</button>
                <button>Filter</button>
            </section>

            <Product  
                id='9292929'
                img="http://pngimg.com/uploads/necklace/necklace_PNG129.png"
                price={20.99}
                title="Classing Casio"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt."
            />
        </div>
    )
}

export default Watches
