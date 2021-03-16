import React, {useState, useEffect} from 'react'
import {useStateValue} from './StateProvider'
import {Link, useLocation} from 'react-router-dom'
import {Menu, Close, ShoppingBasket, Search} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import './css/Header.css'
function Header() {

    const [{basket}, dispatch] = useStateValue()



    const [openNav, setOpenNav] = useState(false)
    const [openSearchInput, setOpenSearchInput] = useState(false)
    const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);
    
      const toTopPage = () => window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }) 
    
    return (
        <div className="header">
            <div className="header__wrapper">
                <div className="main__wrapper">
                    <div onClick={()=> setOpenNav(true)} className="header__small__nav">
                        <Menu className="icon" />
                    </div>
                    <div onClick={toTopPage} className="header__logo">
                        <h2> <Link to='/'>BLINGBLING</Link> </h2>
                    </div>
                    <div className="header__cart">
                        <Link to="checkout">
                            <ShoppingBasket className="icon" />
                            <div className="item__in__basket">
                                <span>{basket?.length}</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <section className={`search`}>
                    <form >
                        <div className="input__field">
                            <Search className="icon" />
                            <input type="text" placeholder="I am searching for ..." />
                        </div>
                        {/* <div className="search__btn">
                            <Button>Search</Button>
                        </div> */}
                    </form>
                </section>
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
