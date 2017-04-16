import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.changeScreen(this.state.value)
    }

    render() {
        return (
            <div id = "home-container">
                <h1 id = "home-title">Twitter Trends</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id = "home-input" type="text" value={this.state.value} onChange={this.handleChange} />
                    <input id = "home-submit" type="submit" value="Go" />
                </form>
            </div>
        )
    }
}

export default HomePage;
