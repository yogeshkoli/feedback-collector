import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Indetifying you...'
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [<li key="4" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
                <li key="1"><a href="/"> {this.props.auth.name.givenName}</a></li>,
                <li key="3"><Stripe /></li>,
                <li key="2"><a href="/api/logout">Logout</a></li>];
        }
    }

    render() {
        return (
            <div>
                <nav className="AppNav">
                    <div className="nav-wrapper">

                        <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
                            Feedback Collector
                        </Link>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateProps({ auth }) {
    return { auth };
}

export default connect(mapStateProps)(Header);
