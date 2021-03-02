import React from 'react'
import {Search,FavoriteBorder} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import '../css/Product.css'
function Watches() {
    return (
        <div className="product__pages watches">
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

            <section className="products__container">
                <div className="products">
                    <div className="icon__div">
                        <FavoriteBorder className="icon" />
                    </div>
                    <div className="img">
                        <img src="https://i.pinimg.com/originals/fb/8b/42/fb8b42615e4d653c3b094544c32a8fbf.png" alt=""/>

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
                        <img src="https://lh3.googleusercontent.com/proxy/41aB9DKNipIF0JSV9ybIMwKRNbuNugqHYk57-qayxl9xLqASIYmPm8WVEHRH2yY_x_EEt57eVWq0uYi3xM6f4LoxQqTcr4a_2CbyWAFS7IA-pj8JxlwLf_b5LRQPF_YX8g" alt=""/>

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
                        <img src="https://pngimg.com/uploads/watches/watches_PNG9869.png" alt=""/>

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
