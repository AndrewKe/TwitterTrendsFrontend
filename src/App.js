import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweets from './Tweets.js'
import ReactHighcharts from 'react-highcharts'

class App extends Component {
    render() {
        var config = {
            title: {
                text: 'Trend History'
            },
            yAxis: {
                title: {
                    text: 'Popularity'
                }
            },
            xAxis: {
                categories: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00']
            },
            series: [{
                name: '#react',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
            }]
        };

        return (
            <div className="App">
                <div className="App-header">
                    <img  id = "logo" src = "/twitter.png"/>
                    <h2>Twitter Trends</h2>
                </div>
                <div id = "content">
                    <ReactHighcharts id = "graph" config = {config}></ReactHighcharts>
                    <Tweets/>
                </div>
            </div>
        );
    }
}

export default App;
