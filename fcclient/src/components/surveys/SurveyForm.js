import _ from 'lodash';
import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
    { label: 'Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' },
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({ name, label }) => {
            return <Field
                key={name}
                type="text"
                label={label}
                name={name}
                component={SurveyField}
            />
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s8">
                        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                            {this.renderFields()}

                            <Link to="/surveys" className="red btn-flat left white-text">
                                Cancel
                                <i className="material-icons right">close</i>
                            </Link>

                            <button className="teal btn-flat right white-text" type="submit">
                                Next
                                <i className="material-icons right">done</i>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);