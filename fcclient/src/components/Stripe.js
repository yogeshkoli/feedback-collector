import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Button from '@material-ui/core/Button';

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
                <Button variant="outlined" className="py-6 px-8" style={{ marginTop: '7px' }} key="1" color="secondary" >
                    ADD CREDITS
                </Button>
            </StripeCheckout >
        );
    }
}

export default connect(null, actions)(Stripe);