import React from 'react';
import {Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';


function Main(props) {

    
    return (
        
        <Switch>

            <Route path='/' component={Home}/>
        
        </Switch>
    );
}

export default Main;