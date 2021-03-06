import React from 'react'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom'
//Components
import Header from '../components/Header'
import Landing from '../components/Landing'
import Watches from '../components/pages/Watches'
import Chains from '../components/pages/Chains'
import ProductInfo from '../components/pages/ProductInfo'
import Checkout from '../components/pages/Checkout'
import Payment from '../components/pages/Payment'
import Orders from '../components/pages/Orders'
import Footer from '../components/Footer'
// Stripe
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

//css
import './App.css';


const promise = loadStripe('pk_test_51ITBiPDkKKCnsU3mzowRSuptSxuYu1YiPtFZfC0octwgDMKJj9uYHHxlwJFlCPSUBIATHHQjtc3MmuJGOkDQTEtp00X30SP1ZT')

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="payment__app__div">
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/payment">
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
          </div>
        </Switch>
        <Switch>
          {/* payment and checkout */}
          <div className="main__div">
            <Route path="/checkout">
              <Checkout />
            </Route>
            {/* Product info */}
            <Route path="/product">
              <ProductInfo />
            </Route>
            {/* Products */}
            <Route path="/chains">
              <Chains />
            </Route>
            <Route path="/watches">
              <Watches />
            </Route>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Footer />

          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
