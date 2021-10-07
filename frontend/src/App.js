import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CheckoutScreen from './screens/CheckoutScreen';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar click={ () => setSideToggle(true) }/> 
        <SideDrawer show={ sideToggle } click={ () => setSideToggle(false) }/>
        <Backdrop show={ sideToggle } click={ () => setSideToggle(false) }/>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/checkout" component={CheckoutScreen} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
