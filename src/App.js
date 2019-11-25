import React from 'react';
import Homepage from './pages/homepage/Homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';

import './App.css';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
};

export default App;