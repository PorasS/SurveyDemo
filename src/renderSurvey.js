import React from 'react';
import * as Survey from 'survey-react';
import { json2, json3 } from './surveyJson';
import axios from 'axios';

class RenderSurvey extends React.Component {
    render() {
        console.log("RenderSurvey: ", this.props);
        Survey
            .StylesManager
            .applyTheme("default");

        // window.survey = new Survey.Model(json);
        var survey = new Survey.Model(this.props.json);

        survey
            .onComplete
            .add(function (result) {
                console.log("result: ", result.data);
                document
                    .querySelector('#surveyResult')
                    .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
            });

        return (
            <div>
                <Survey.Survey model={survey} />
            </div>
        );
    }
}

export default RenderSurvey;