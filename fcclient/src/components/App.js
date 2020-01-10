import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import SignIn from './auth/SignIn';

const VoitingFeedback = () => <p>Thanks for voting!</p>;

class App extends Component {

    componentDidMount() {
        this.props.featchUser();
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />

                <BrowserRouter>
                    <div>
                        <Header />
                        <Container fixed>
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/signin" component={SignIn} />
                            <Route exact path="/surveys" component={Dashboard} />
                            <Route path="/surveys/new" component={SurveyNew} />
                            <Route path="/api/surveys/:surveyId/:choice" component={VoitingFeedback} />
                        </Container>
                    </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default connect(null, actions)(App);