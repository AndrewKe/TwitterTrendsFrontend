import React, { Component } from 'react';
import TweetEmbed from 'react-tweet-embed'

class Tweets extends Component {
  render() {
    return (
        <div>
            <h2>Tweets</h2>
            <TweetEmbed id='692527862369357824' options={{cards: 'hidden' }} />
        </div>
    );
  }
}

export default Tweets;
