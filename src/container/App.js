import React from 'react'
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom'
//Components
import Header from '../components/Header'
import Landing from '../components/Landing'
import Watches from '../components/pages/Watches'
import Chains from '../components/pages/Chains'
import ProductInfo from '../components/pages/ProductInfo'
import Checkout from '../components/pages/Checkout'
import Footer from '../components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
