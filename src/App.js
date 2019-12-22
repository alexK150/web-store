import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {Route, Switch, Redirect} from 'react-router-dom';

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import Checkout from "./pages/checkout/checkout.component";

import './App.css';

class App extends React.Component {

    //closing subscription when component unmount
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        //open subscription (when user updated, firebase sends message, auth listening State Changes )
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                //DocumentSnapshot allows to get properties of data
                userRef.onSnapshot(snapshot => {
                    this.props.setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            } else {
                setCurrentUser(userAuth);
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
                <Header/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={Checkout}/>
                    <Route exact path='/signin' render={() => this.props.currentUser ? (
                        <Redirect to='/'/>
                    ) : (
                        <SignInAndSignUp/>
                    )}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);