import React from 'react';
import { Component } from './component';
import { PortalExample } from './portals/portal-example';

type AppState = {
  counter: number;
  error: null|Error;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    counter: 1,
    error: null
  }

  componentDidMount() {
    console.log('mount: App');
  }

  componentDidUpdate() {
    console.log('update: App');
  }

  static getDerivedStateFromError(error: Error) {
    return {
      error
    };
  }

  componentDidCatch(error: Error) {
    console.log(error);
  }

  render() {
    console.log('render: App');

    if (this.state.error != null) {
      return <div>{this.state.error.message}</div>
    }

    return (
      <div>
        <div>
          App counter {this.state.counter}
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Inc `App` counter
          </button>
        </div>
        ---
        <Component initialCounter={2} key={this.state.counter} />

        <hr />
        <hr />
        <hr />

        <PortalExample />
      </div>
    );
  }
}

export default App;
