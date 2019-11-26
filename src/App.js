import React from 'react';
import Homepage from './pages/homepage/Homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component';

import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shop' component={ShopPage}/>
                <Route exact path='/signin' component={SignInAndSignUp}/>
            </Switch>
        </div>
    );
};

export default App;