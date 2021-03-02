import React from 'react'
import {Button} from '@material-ui/core'
import {Facebook, Instagram, Twitter} from '@material-ui/icons'
import './css/Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="newsletter">
                <div className="title">
                    <h2>Sign up to our newsletter</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, vel.</p>
                </div>
                <div className="input">
                    <form >
                        <input type="text" placeholder="Your Emaill" required />
                        <div className="btn">
                            <Button>Sign up</Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer__section">
                <div className="socials">
                    <div className="title">
                        <h2>Follow us</h2>
                    </div>
                    <div className="icons__div">
                        <Facebook className="icon facebook" />
                        <Instagram className="icon insta"/>
                        <Twitter className="icon twitter" />
                    </div>
                </div>
                <div className="company__info">
                    <div className="title">
                        <h2>Company information</h2>
                    </div>
                    <nav>
                        <ul> 
                            <li>about us</li>
                            <li>careers</li>
                            <li>privacy & policy</li>
                            <li>Terms & conditions </li>
                        </ul>
                    </nav>
                </div>
                <div className="customer__service">
                <div className="title">
                        <h2>customer services</h2>
                    </div>
                    <nav>
                        <ul> 
                            <li>contact us</li>
                            <li>Delivery & Cookies</li>
                            <li>Returns</li>
                            <li>FAQs</li>
                        </ul>
                    </nav>
                </div>
                <div className="copyright">
                    <p>© 2001 - 2021  The Jewellers Ltd</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
