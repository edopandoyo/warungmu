import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Banner from './Banner';
import App from '../App';
import ProductDetail from './ProductDetail';
  
const AppRoute = () => {
    return (
        <Router>
            <Route path="/" exact component={App} />
            <Route path="/banner" component={Banner}/>
            <Route path="/detail" component={ProductDetail}/>
        </Router>
    )
}

export default AppRoute;