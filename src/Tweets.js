import React, { Component } from 'react';
import TweetEmbed from 'react-tweet-embed'

class Tweets extends Component {
  render() {
      console.log(this.props.tweets);
    return (
        <div id = "tweets-div">
            <h2>Tweets</h2>
            {this.props.tweets ? this.props.tweets.map((id) => {
                return <TweetEmbed id={id} options={{cards: 'hidden' }} />
            }) : <span>None</span>}
        </div>
    );
  }
}

export default Tweets;
