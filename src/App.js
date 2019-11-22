import React from 'react';
import './App.css';
import HomepageComponent from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';

const HatsPage = () => {
    return (<div>
        <h1>HATS PAGE</h1>
    </div>)
};

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomepageComponent}/>
                <Route exact path='/hats' component={HatsPage}/>
            </Switch>
        </div>
    );
};

export default App;