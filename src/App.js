import React from 'react';
import Homepage from './pages/homepage/Homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';

import './App.css';
import Header from './components/header/Header.component';

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
};

export default App;