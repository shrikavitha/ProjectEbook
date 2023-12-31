import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'

import HomePage from './components/pages/HomePage'
import Sell from './components/pages/Sell'
import Buy from './components/pages/Buy'
import Thank from './components/pages/Thank'
import Last from './components/pages/Last'
import Update from './components/pages/Update'
import Delete from './components/pages/Delete'
import Layout from './Layout'
import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage }/>
                    <Route path="/home" component={ HomePage } />
                    <Route path="/sell" component= { Sell }/>
                    <Route path="/buy" component= { Buy }/>
                    <Route path="/thank" component={ Thank }/>
                    <Route path="/last" component={ Last }/>
                    <Route path="/Update" component={ Update }/>
                    <Route path="/Delete" component={ Delete }/>
                    <Route path="/Layout" component={ Layout }/>
                    
                </Switch>
            
            </div>
        </Router>
    )
}