import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tweets from './Tweets.js'
import ReactHighcharts from 'react-highcharts'

var ws = new WebSocket("ws://10.0.0.33:8080/");


class App extends Component {

    constructor(props) {
        super(props)
        ws.send(this.props.tweets);
        //console.log(this.props.tweets);
        this.state = {};
        ws.onmessage = (evt) => {
            //console.log(evt.data);
            this.setState({
                data: JSON.parse(evt.data)
            })
        }
    }

    render() {
        var good = this;
        var twts = []
        var config = {
            title: {
                text: 'Trend History'
            },
            yAxis: {
                title: {
                    text: 'Popularity'
                }
            },
            plotOptions: {
                series: {
                    animation: false,
                    point: {
                        events: {
                            mouseOver: function () {
                                // if (this.x) {
                                //     good.setState({
                                //         x: this.x
                                //     })
                                // }

                            }
                        }
                    }
                }
            },
            xAxis: {
                categories: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00']
            },
            series: [{
                name: `#${this.props.tweets}`,
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
            }],
            line: {
        animation: false
    }
        };

        if (this.state.data) {
            config.xAxis.categories = []
            config.series[0].data = []
            // for ()
            for (var time of this.state.data) {
                //console.log(time);
                config.xAxis.categories.push(time.time);
                config.series[0].data.push(time.tweets.length);
                twts = twts.concat(time.tweets)
            }
        }

        //console.log(config);
        //console.log(twts);
        //console.log(twts[1]);
        return (
            <div className="App">
                <div className="App-header">
                    <img  id = "logo" src = "/twitter.png"/>
                    <h2>Twitter Trends</h2>
                </div>
                <div id = "content">
                    <ReactHighcharts id = "graph" config = {config}></ReactHighcharts>
                    <Tweets tweets = {twts}/>
                </div>
            </div>
        );
    }
}

export default App;
