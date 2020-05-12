import React from 'react';
import * as Survey from 'survey-react';
import { json2, json3 } from './surveyJson';
import axios from 'axios';
import RenderSurvey from './renderSurvey';

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            json: null
        };
    }

    componentDidMount() {
        var res = axios.get("http://localhost:8080/survey/getOne/28").then((res) => {
            console.log("res data: ", res.data.surveyJson)
            const json = res.data.surveyJson;
            this.setState({
                json
            })
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.json ? <RenderSurvey json={this.state.json} /> : "Loading..."
                }
            </div>
        );
    }
}

export default App;