import React from 'react'
import {LocalShipping, CalendarToday, Public} from '@material-ui/icons'
import './css/Landing.css'
function Landing() {
    return (
        <div className="landing">
            <section className="showCase">
                <div className="overlay"></div>
                <div className="title">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo eligendi dolor. Nobis reiciendis ducimus ad dolorem porro quisquam laboriosam?</p>

                </div>
                <div className="img">
                    <img src="https://www.pngkey.com/png/full/19-191849_watch-rolex-cosmograph-daytona-automatic-mens-watch-18k.png" alt="image"/>

                </div>
            </section>

            <section className="welcome__msg">
                <h2>Welcome to BLINGBLING</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus cum sapiente explicabo vero voluptatum, ab accusantium impedit suscipit quidem unde pariatur exercitationem magni maxime quod reprehenderit. Vel numquam labore tenetur.</p>
            </section>
            <section className="top__collection">
            <div className="title">
                    <h3>Top Collections</h3>
                </div>
                <div className="wrapper">
                    <div className="product product1">
                        <div className="img">
                            <img src="https://lh3.googleusercontent.com/proxy/cxEGrdZ-mrOaQjkOwtQh1eL0YNCrwD9e18ZzXrh4gkRzovq1CK_dtiGAHAUbsZ1LDod8BfJ-HbMVn6F_ty9aSbAU2g54pOCufkdtEo9OyKuTzeXhKi1rtvsO4ueRUA" alt=""/>
                        </div>
                        <h3>Shop GUCCI</h3>
                    </div>
                    <div className="product product2">
                        <div className="img">
                            <img src="https://freepngimg.com/thumb/watch/22656-5-rolex-watch-transparent.png" alt=""/>
                        </div>
                        <h3>Shop PRADA</h3>
                    </div>
                    <div className="product product3">
                        <div className="img">
                            <img src="http://pngimg.com/uploads/watches/watches_PNG9880.png" alt=""/>
                        </div>
                        <h3>Shop CHANEL</h3>
                    </div>
                </div>
            </section>

            <section className="featured__products">
                <div className="title">
                    <h3>Featured Products</h3>
                </div>
                <div className="wrapper">
                    <div className="product">
                        <img src="https://i.pinimg.com/originals/82/59/93/82599369344d8092ba84d4ce50676dde.png" alt=""/>
                        <h3>Ermani</h3>
                    </div>
                    <div className="product">
                        <img src="https://static.wixstatic.com/media/2cd43b_ac62e74cf8e04266afbb7932d162ac2f~mv2.png/v1/fill/w_640,h_638,fp_0.50_0.50,q_95/2cd43b_ac62e74cf8e04266afbb7932d162ac2f~mv2.png" alt=""/>
                        <h3>Apple</h3>
                    </div>
                    <div className="product">
                        <img src="https://www.freepnglogos.com/uploads/watch-png/download-rolex-watch-photos-png-image-pngimg-21.png" alt=""/>
                        <h3>Casio</h3>
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

export default Landing
