 
import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect
 } from 'react-router-dom';

import { SearchScreen } from '../components/search/SearchScreen'
import { HomeScreen } from '../components/home/HomeScreen';
import { Characters } from '../components/character/Characters';
import { NavBar } from '../components/ui/NavBar';
  
//Sistema de rutas principal - Tiene como caracteriztica el <Router/>
export const AppRouter = () => {
   return (
    <Router>
      <div>
        <NavBar/>
          <div className="m-2">
            <Switch>
            {/* <Route exact path="/login" component={Login} />
            <Route path="/" component={DashboardRoutes} /> */}
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/charater/:charaterId" component={Characters} />
            <Route exact path="/search" component={SearchScreen} />

            <Redirect to="/home" />
            </Switch> 
          </div>
      </div>
    </Router>
   )
}