import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProductsList from './components/ProductsList';
import Footer from './components/Footer';
import DetailedProduct from './components/DetailedProduct';
import DondeEstamos from './components/DondeEstamos';
import Cart from './components/cart/Cart';


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/productos' component={ProductsList}/>
          <Route exact path='/donde-estamos' component={DondeEstamos}/>
          <Route exact path='/productos/:slug' component={DetailedProduct}/>
          <Route exact path='/cesta' component={Cart}/>
        </Switch>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App
