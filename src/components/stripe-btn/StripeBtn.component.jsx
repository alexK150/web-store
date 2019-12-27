import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import image from '../../assets/payment.png'

const StripeBtn = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_fK2L1A9FjShQ1Tlo0PKqZzUm00WnAJm4PC'

    const onToken = (token) =>{
        console.log(token)
        alert('Payment Successful')
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Web Store Inc.'
            billingAddress
            shippingAddress
            image={image}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeBtn;