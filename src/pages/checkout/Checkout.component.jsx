import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import StripeBtn from "../../components/stripe-btn/StripeBtn.component";

import './checkout.styles.scss';

const Checkout = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            !PLEASE USE THIS CREDENTIALS FOR PAYMENT!
            <br/>
            4242 4242 4242 4242 - exp: 01/20 - cvv: 123
        </div>
        <StripeBtn price={total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);