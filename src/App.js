import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Animals from './Animals';
import Prices from './Prices';
import Footer from './Footer';
import Shows from './Shows';
import ChangeShow from './ChangeShow';
import './App.css';
import NavbarCircus from './NavbarCircus';
import ModifyShow from './ModifyShow';

function App() {
  return (
    <div className="App">
      <NavbarCircus />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/animaux" component={Animals} />
        <Route path="/shows" component={Shows} />
        <Route path="/change" component={ChangeShow} />
        <Route path="/modify/:id" component={ModifyShow} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
