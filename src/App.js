import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AllsAnimals from './AllsAnimals';
import Footer from './Footer';
import Shows from './Shows';
import ChangeShow from './ChangeShow';
import './App.css';
import NavbarCircus from './NavbarCircus';
import ModifyShow from './ModifyShow';
import PrivateRoute from './PrivateRoute';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <NavbarCircus />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/animaux" component={AllsAnimals} />
        <Route path="/shows" component={Shows} />
        <Route path="/change" component={ChangeShow} />
        <Route path="/connection" component={SignIn} />
        <Route path="/modify/:id" component={ModifyShow} />
        <PrivateRoute exact path="/adminhome" component={ChangeShow} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
