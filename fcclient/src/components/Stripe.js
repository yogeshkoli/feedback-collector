import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

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
                <ListItem button key="buy-credits" >
                    <ListItemIcon><AttachMoneyOutlinedIcon /></ListItemIcon>
                    <ListItemText primary="Buy Credits" />
                </ListItem>
            </StripeCheckout >
        );
    }
}

export default connect(null, actions)(Stripe);