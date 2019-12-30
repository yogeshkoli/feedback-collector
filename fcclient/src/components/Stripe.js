import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Stripe extends Component {
    render() {
        return (
            <StripeCheckout
                name="Feedback Collector"
                description="$5 for 5 surveys credits"
                amount={500} // cents 5 dollar 
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
            >
                <button className="btn">
                    ADD CREDITS
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Stripe);