import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Container from './components/container';
import store from '../redux/store-renderer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    store.subscribe(() => {
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));

export default App;
