import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField';

class SurveyForm extends Component {

    renderFields() {
        return (
            <div>
                <Field
                    type="text"
                    label="Title"
                    name="title"
                    component={SurveyField}
                />
                <Field
                    type="text"
                    label="subject"
                    name="Subject Line"
                    component={SurveyField}
                />
                <Field
                    type="text"
                    label="Body"
                    name="body"
                    component={SurveyField}
                />
                <Field
                    type="text"
                    label="Recipient List"
                    name="emails"
                    component={SurveyField}
                />
            </div>
        );
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