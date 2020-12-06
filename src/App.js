import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/products' component={Products}></Route>
        <Route path='/orders' component={Orders}></Route>
      </Switch>
      <Footer />
    </Router >
  )
}

export default App;