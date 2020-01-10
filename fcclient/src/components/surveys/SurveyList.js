import React, { Component } from "react";
import { connect } from 'react-redux';
import { featchSurveys } from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.featchSurveys();
    }

    renderSurveys() {

        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card grey lighten-4" key={survey._id}>
                    <div className="card-content ">
                        <span className="card-title">
                            {survey.title}
                        </span>
                        <p>
                            {survey.body}
                        </p>
                        <p className="right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <span className="mr-2">Yes: {survey.yes}</span>
                        <span>No: {survey.no}</span>
                    </div>
                </div>
            );
        });


    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { featchSurveys })(SurveyList);