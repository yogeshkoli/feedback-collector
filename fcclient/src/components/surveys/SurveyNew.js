import React, { Component } from "react";
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12 m4 l3">
                </div>

                <div className="col s12 m8 l9">
                    <SurveyForm></SurveyForm>
                </div>
            </div>
        );
    }

}

export default SurveyNew;