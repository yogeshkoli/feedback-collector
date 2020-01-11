import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

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

    const { enqueueSnackbar } = useSnackbar();

    const surveySender = variant => async () => {
        const re = await submitSurvey(formValues, history)
        enqueueSnackbar('Survey has been sent successfully!', {
            variant,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            }
        });
    };

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
                <button className="green btn-flat right white-text" onClick={surveySender('success')}>
                    Send Survey
                <i className="material-icons right">email</i>
                </button>
                <Button onClick={surveySender('success')}>Show success snackbar</Button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));