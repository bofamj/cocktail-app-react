import React,{useState} from 'react'
import './index.css';
import Nav from './componit/Nav'
import Home from './pags/Home'
import AbotUs from './pags/AbotUs'
import Drinks from './componit/Drinks'
import SingelDrenk from './componit/SingelDrenk'
import Error from './pags/Error'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
        <Router>
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <AbotUs/>
                </Route>
                <Route exact path="/drinks">
                    <Drinks/>
                </Route>
                <Route  path='/cocktail/:id'>
                     <SingelDrenk/>
                </Route>
                <Route exact path="*">
                    <Error/>
                </Route>

            </Switch>

        </Router>
        
    </div>
  );
}

export default App;