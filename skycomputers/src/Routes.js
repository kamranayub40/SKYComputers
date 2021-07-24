import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from "../src/Home";
import About from "../src/about";
import OnlineAddmition from '../src/OnlineAddmition'
import  Gallery from '../src/Gallery'
import Home2 from '../src/home2'
import DIT from '../src/Dit'
import CIT from '../src/CIt'
import Swing from '../src/Swing'
import Scholer from '../src/Scholer'
const Routes = () =>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/OnlineAddmition'>
        < OnlineAddmition  />
      </Route>
      <Route path='/Gallery'>
        < Gallery  />
      </Route>
      <Route path='/Dit'>
        <DIT/>
      </Route>
      <Route path='/CIt'>
        <CIT/>
      </Route>
      <Route path='/Swing'>
        <Swing/>
      </Route>
      <Route path='/Scholer'>
        <Scholer/>
      </Route>
     
     
    </Switch>

export default Routes;