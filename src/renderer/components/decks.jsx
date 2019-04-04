import React from 'react';

import DecksView from './view/decks';

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // render() {
  //   return (<DecksView {...this.state} />);
  // }

  render() {
    return (
      <p>
        Text
      </p>
    );
  }
}

export default Container;
