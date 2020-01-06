import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {

    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div className="row">
            <div className="col s8">

                <h5>Please confirm survey entries</h5>

                <hr />

                {reviewFields}

                <hr />
                <button className="yellow darken-3 btn-flat left white-text" onClick={onCancel}>
                    Back
                <i className="material-icons right">close</i>
                </button>
                <button className="green btn-flat right white-text" onClick={() => submitSurvey(formValues)}>
                    Send Survey
                <i className="material-icons right">email</i>
                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);