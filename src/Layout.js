import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import  Home  from './Pages/Home';
import {Carpark} from './Pages/Carpark';
import {Carsearch} from './Pages/Carsearch';
import {Slotlist} from './Pages/Slotlist';
import {Slotsearch} from './Pages/Slotsearch';



export const Layout = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/car-park' component={Carpark}></Route>
        <Route exact path='/search-car' component={Carsearch}></Route>
        <Route exact path='/list-of-slots' component={Slotlist}></Route>
        <Route exact path='/search-slots' component={Slotsearch}></Route>
      </Switch>
    </Router>
  );
};
