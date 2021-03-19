import React from 'react'
import {LocalShipping, CalendarToday, Public} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import './css/Landing.css'
function Landing() {
    return (
        <div className="landing">
            <div className="landing__container">

                <section className="showcase">
                    <div className="img">
                        <img className="first__img" src="https://media.tiffany.com/is/image/tiffanydm/NewJewelry_Tcolor_BrowseGridHero_USExclusive_Mobile?$tile$&wid=720" alt=""/>
                        <img className="second__img" src="https://media.tiffany.com/is/image/tiffanydm/NewJewelry_Tcolor_BrowseGridHero_USExclusive_Desktop?$tile$&wid=2992" alt=""/>
                    </div>
                    <div className="content">
                        <h2>Lorem, ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque maiores, pariatur iste beatae et ex amet optio vel deleniti earum?</p>
                        <Button>Shop All</Button>
                    </div>
                </section>

                <section className="main__sellers">
                    <div className="product__container">
                        <div className="content">
                            <div className="img">
                                <img src="https://lh3.googleusercontent.com/proxy/TrsH8Au0jfpjdJwQ0yUl992DyRz4PS_-89CEv_B4nGg8L29oFACbscVt8Gv2hR7SM8yODSLuS3neE2JWYLDy0jLPNxohPGc4dQHQMzDBXMMANEdwu6o" alt=""/>
                            </div>
                            <div className="body">
                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi.</p>
                                <Button>Shop now</Button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="img">
                                <img src="https://static.wixstatic.com/media/2cd43b_9647e1ea59f749d1aa7c06b1a634327a~mv2.png/v1/fill/w_640,h_1056,fp_0.50_0.50,q_95/2cd43b_9647e1ea59f749d1aa7c06b1a634327a~mv2.png" alt=""/>
                            </div>
                            <div className="body">
                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi.</p>
                                <Button>Shop now</Button>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="featured__products">
                    <div className="product__container">
                        <div className="content">
                            <div className="img">
                                <img src="https://lh3.googleusercontent.com/proxy/TrsH8Au0jfpjdJwQ0yUl992DyRz4PS_-89CEv_B4nGg8L29oFACbscVt8Gv2hR7SM8yODSLuS3neE2JWYLDy0jLPNxohPGc4dQHQMzDBXMMANEdwu6o" alt=""/>
                            </div>
                            <div className="body">
                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi.</p>
                                <Button>Shop now</Button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="img">
                                <img src="https://static.wixstatic.com/media/2cd43b_9647e1ea59f749d1aa7c06b1a634327a~mv2.png/v1/fill/w_640,h_1056,fp_0.50_0.50,q_95/2cd43b_9647e1ea59f749d1aa7c06b1a634327a~mv2.png" alt=""/>
                            </div>
                            <div className="body">
                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi.</p>
                                <Button>Shop now</Button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="img">
                                <img src="https://www.bulgari.com/dw/image/v2/BCSG_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw0cf33d30/images/images/1153765.png?sw=640" alt=""/>
                            </div>
                            <div className="body">
                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, excepturi.</p>
                                <Button>Shop now</Button>
                            </div>
                        </div>
                    </div>
                </section>
                
                
                <section className="delivery__info">
                    <div className="title">
                        <h3>Delivery Information</h3>
                    </div>
                    <div className="delivery__container">
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
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Landing
