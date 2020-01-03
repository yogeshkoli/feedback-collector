import _ from 'lodash';
import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField';

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
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}

                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);