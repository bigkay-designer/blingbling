import React from 'react'
import {Search,ArrowBack, FavoriteBorder, Star, ShoppingCart, Share} from '@material-ui/icons'
import {LocalShipping, CalendarToday, Public} from '@material-ui/icons'

import {Button} from '@material-ui/core'
import '../css/ProductInfo.css'
function ProductInfo() {


    return (
        <div className="product__info">
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
            <div className="back__btn">
                <div className="wrapper">
                    <ArrowBack />
                    <button>Back</button>
                </div>
            </div>
            <section className="products__container">
                <div className="products">
                    {/* <div className="icon__div">
                        <FavoriteBorder className="icon" />
                    </div> */}
                    <div className="img">
                        <img src="https://i.pinimg.com/originals/fb/8b/42/fb8b42615e4d653c3b094544c32a8fbf.png" alt=""/>

                    </div>
                    <div className="product__body">
                        <span className="price">£9.99</span>
                        <h3 className="product__title">Classing Casio</h3>
                        <p className="product__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, incidunt.</p>
                    </div>
                    <div className="product__review">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <span>(5 Reviews)</span>
                    </div>
                </div>
            </section>

            <section className="add__to__bag">
                <h3 className="title">Delivery Information</h3>
                <div className="btn__div">
                    <ShoppingCart />
                    <Button>add to basket</Button>
                </div>
                <div className="other__btn">
                    <div className="icon__div favourite">
                        <FavoriteBorder />
                        <span>Add to favourite</span>
                    </div>
                    <div className="icon__div share">
                        <Share />
                        <span>Share this product</span>
                    </div>
                </div>
            </section>
            
            <section className="similar__products">
                <div className="title">
                    <h3>Similar Products</h3>
                </div>
                <div className="container">
                    <div className="wrapper">
                        <div className="product">
                            <div className="img">
                                <img src="https://static.wixstatic.com/media/2cd43b_616a804d06f54d7e9a59d04574f24243~mv2_d_2288_2288_s_2.png/v1/fill/w_640,h_640,fp_0.50_0.50,q_95/2cd43b_616a804d06f54d7e9a59d04574f24243~mv2_d_2288_2288_s_2.png" alt=""/>
                            </div>
                            <div className="price">
                                <span>£129.99</span>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img">
                                <img src="https://i.pinimg.com/originals/82/59/93/82599369344d8092ba84d4ce50676dde.png" alt=""/>
                            </div>
                            <div className="price">
                                <span>£19.99</span>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img">
                                <img src="https://purepng.com/public/uploads/large/purepng.com-mens-wrist-band-watchclockbelltimealarmwristbandmens-1421526465647su5cb.png" alt=""/>
                            </div>
                            <div className="price">
                                <span>£45.99</span>
                            </div>
                        </div>
                        <div className="product">
                            <div className="img">
                                <img src="https://cdn.picpng.com/watches/watches-transparent-38656.png" alt=""/>
                            </div>
                            <div className="price">
                                <span>£128.99</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="review">
                <div className="title">
                    <h3>Review(3)</h3>
                </div>
                <div className="wrapper">
                    <div className="review__body">
                        <div className="icon__div">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur exercitationem numquam est eum ut illo ea aspernatur dolore optio?</p>
                        <span>Kahlid Ibrahim</span>
                        <span className="date">02/03/2021</span>
                    </div>
                    <div className="review__body">
                        <div className="icon__div">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur exercitationem numquam est eum ut illo ea aspernatur dolore optio?</p>
                        <span>Kahlid Ibrahim</span>
                        <span className="date">02/03/2021</span>
                    </div>
                    <div className="review__body">
                        <div className="icon__div">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur exercitationem numquam est eum ut illo ea aspernatur dolore optio?</p>
                        <span>Kahlid Ibrahim</span>
                        <span className="date">02/03/2021</span>
                    </div>
                </div>
            </section>

            <section className="delivery__info">
                <div className="title">
                    <h3>Delivery Information</h3>
                </div>
                <div className="body">
                    <div className="icon__div">
                        <LocalShipping className="icon" />
                    </div>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, quis!</h3>
                </div>
                <div className="body">
                    <div className="icon__div">
                        <CalendarToday className="icon" />
                    </div>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, quis!</h3>
                </div>
                <div className="body">
                    <div className="icon__div">
                        <Public className="icon" />
                    </div>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, quis!</h3>
                </div>
            </section>
        </div>
    )
}

export default ProductInfo
