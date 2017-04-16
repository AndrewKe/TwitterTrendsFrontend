import React, { Component } from 'react';

import HomePage from './HomePage.js'
import App from './App.js'

class Router extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: 'home'
        }
    }

    render() {
        return (
            this.state.screen == 'home' ? <HomePage changeScreen = {(tweets) => {
                this.setState({tweets: tweets, screen: 'app'})
            }}/> : <App tweets = {this.state.tweets}/>
        )
    }
}

export default Router;
