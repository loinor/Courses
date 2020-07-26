import React, {Component} from 'react';
import Layout from './hoc/Layout/layout';
import Quiz from './containers/Quiz/Quiz';

class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz></Quiz>
      </Layout>
    );
  }
}

export default App;
