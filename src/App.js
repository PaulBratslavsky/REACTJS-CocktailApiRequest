import React from "react";

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cocktail/:id/" component={SingleCocktail} />
        <Route path="*"component={Error} />
      </Switch>
  </Router>
  );
  
}
