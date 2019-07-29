import React, { Component } from "react";

import Navhead from "../../components/nav/Navhead";

import { BrowserRouter as Router, Route,Switch } from "react-router-dom"
import Home from '../../components/home/Home'

import Adoption_Two  from '../../components/adoption_two/Adoption_two'

class Main extends Component {
  render() {
    return (
      <div>
      

        <Router>
          <Navhead />
         

          <Switch> 
             
            <Route exact={true} path="/" component={Home} />
            <Route path="/adoption" component={Adoption_Two} />
          </Switch>
            
          <style>
            @import
            url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');
          </style>
        </Router>
      </div>
    );
  }
}
export default Main;