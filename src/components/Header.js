import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Menu, Close, ShoppingBasket, Search} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import './css/Header.css'
function Header() {
    const [openNav, setOpenNav] = useState(false)
    const [openSearchInput, setOpenSearchInput] = useState(false)

    return (
        <div className="header">
            <div className="header__wrapper">
                <div onClick={()=> setOpenNav(true)} className="header__small__nav">
                    <Menu className="icon" />
                </div>
                <div className="header__logo">
                    <h2> <Link to='/'>BLINGBLING</Link> </h2>
                </div>
                <div className="header__cart">
                    <ShoppingBasket className="icon" />
                </div>
            </div>
            <div className={` header__nav__container ${openNav && "show__nav"} `}>
                <nav className="header__nav">
                    <ul>
                    <li onClick={()=> setOpenNav(false)}><span><Link to="/chains">chains</Link></span></li>
                        <li><span>rings</span></li>
                        <li><span>bracelets</span></li>
                        <li onClick={()=> setOpenNav(false)}><span><Link to="/watches">watches</Link></span></li>
                    </ul>
                    <div className={`nav__search ${openSearchInput && "show__search"}`}>
                        <form >
                            <div className="input__field">
                                <Search className="icon" />
                                <input type="text" placeholder="Search for keyword, brand or product" />
                            </div>
                            <div className="search__btn">
                                <Button>Search</Button>
                            </div>
                        </form>
                    </div>
                    <div className="icon__wrapper">
                        <div className="header__cart">
                            <ShoppingBasket className="icon" />
                        </div>
                        <div onClick={()=> setOpenSearchInput(true)} className="icon__div">
                            <Search />
                        </div>
                        <div onClick={()=> (setOpenNav(false), setOpenSearchInput(false))} className="icon__div close__div">
                            <Close className="icon" /> <span>Close</span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
