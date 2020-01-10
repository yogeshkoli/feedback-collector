import React, { Component } from 'react';
import SurveyList from './surveys/SurveyList';
import NewSurveyButton from './surveys/NewSurveyButton';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NewSurveyButton></NewSurveyButton>
                <SurveyList></SurveyList>
            </div>
        );
    };
}

export default Dashboard;