import React from 'react'
import {Search,FavoriteBorder} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import '../css/Product.css'
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
                <span>watches</span>
            </div>
            <section className="product__filter">
                <button>Sort</button>
                <button>Filter</button>
            </section>

            <section className="products__container">
                <div className="products">
                    <div className="icon__div">
                        <FavoriteBorder className="icon" />
                    </div>
                    <div className="img">
                        <img src="http://pngimg.com/uploads/necklace/necklace_PNG129.png" alt=""/>

                    </div>
                    <div className="product__body">
                        <span className="price">£9.99</span>
                        <h3 className="product__title">Classing Casio</h3>
                        <p className="product__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt.</p>
                    </div>
                </div>
                <div className="products">
                    <div className="icon__div">
                        <FavoriteBorder className="icon" />
                    </div>
                    <div className="img">
                        <img src="https://lh3.googleusercontent.com/proxy/hTQmn1zM-ltl-cyKayaYCXVqAr7TkWZF7iF6ZX_Vix0hUMaKM_prOFvmAc-5kvotDP1mVya5P6JJQDr6VVSehKWEK0lSnWO7GUEeod0Yp2scvFkRVGA_wEy42g" alt=""/>

                    </div>
                    <div className="product__body">
                        <span className="price">£9.99</span>
                        <h3 className="product__title">Classing Casio</h3>
                        <p className="product__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt.</p>
                    </div>
                </div>
                <div className="products">
                    <div className="icon__div">
                        <FavoriteBorder className="icon" />
                    </div>
                    <div className="img">
                        <img src="https://pngimg.com/uploads/necklace/necklace_PNG69.png" alt=""/>

                    </div>
                    <div className="product__body">
                        <span className="price">£9.99</span>
                        <h3 className="product__title">Classing Casio</h3>
                        <p className="product__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Watches
