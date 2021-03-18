import React from 'react';

type ComponentProps = {
  initialCounter: number;
}

type ComponentState = {
  counter: number;
  isOpen: boolean;
  shouldHaveErrorDuringRendering: boolean;
}

export class Component extends React.Component<ComponentProps, ComponentState> {
  incButtonRef = React.createRef<HTMLButtonElement>();

  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      counter: 0,
      isOpen: false,
      shouldHaveErrorDuringRendering: false,
    };
  }

  shouldComponentUpdate(nextProps: ComponentProps, nextState: ComponentState) {
    return this.props.initialCounter !== nextProps.initialCounter
      || nextState !== this.state;
  }

  componentDidMount() {
    console.log('mount: Component');
    const button = this.incButtonRef.current;
    if (button) {
      console.log(button.getBoundingClientRect());
      button.style.color = '#f00';
    }
  }

  componentDidUpdate() {
    console.log('update: Component');
  }

  static getDerivedStateFromProps(props: ComponentProps, state: ComponentState) {
    // console.log('getDerivedStateFromProps', props, state);
    return null;
  }

  render() {
    console.log('render: Component');

    if (this.state.shouldHaveErrorDuringRendering) {
      throw new Error('sorry');
    }

    return (
      <>
        <div>
          Hello {this.state.counter + this.props.initialCounter}
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
            ref={this.incButtonRef}
          >
            Inc `Component` counter
          </button>
        </div>

        <button
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          Toggle
        </button>
        {this.state.isOpen && <ComponentContent />}

        <button onClick={() => this.setState({ shouldHaveErrorDuringRendering: true })}>
          Throw error
        </button>
      </>
    );
  }
}


class ComponentContent extends React.Component {
  onKeyDown = (e: KeyboardEvent) => {
    console.log(e.key);
  }

  componentDidMount() {
    console.log('mount: ComponentContent');
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    console.log('unmount: ComponentContent');
    document.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <div>
        Content
      </div>
    );
  }
}
