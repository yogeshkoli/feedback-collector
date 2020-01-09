import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

class Dashboard extends Component {
    render() {
        return (
            <div>

                <SurveyList></SurveyList>

                <div className="fixed-action-btn">
                    <Link className="btn-floating btn-large purple" to="/surveys/new">
                        <i className="large material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    };
}

export default Dashboard;