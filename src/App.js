import React from 'react';
import Homepage from './pages/homepage/Homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    //closing subscription when component unmount
    unsubscribeFromAuth = null;

    componentDidMount() {
        //open subscription (when user updated, firebase sends message, auth listening State Changes )
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                //DocumentSnapshot allows to get properties of data
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            } else {
                this.setState({currentUser: userAuth});
            }
        })
    }

    //actual closing of subscription
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;