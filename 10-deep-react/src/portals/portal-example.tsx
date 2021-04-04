import React, { createRef } from 'react';
import { createPortal } from 'react-dom';

type MenuProps = {
  activePage: string,
  onActiveChange: (activePage: string) => void
}

class Menu extends React.Component<MenuProps> {
  render() {
    return (
      <nav>
        <button onClick={() => this.props.onActiveChange('main')}>
          Main
        </button>
        <div id="menu-page-configured-items" />
      </nav>
    );
  }
}

type PageMenuItemsState = { isMount: boolean };

class PageMenuItems extends React.Component<{}, { isMount: boolean }> {
  state: PageMenuItemsState = {
    isMount: false
  }

  componentDidMount() {
    this.setState({
      isMount: true
    })
  }

  render() {
    if (this.state.isMount) {
      return createPortal(
        this.props.children,
        document.getElementById('menu-page-configured-items')!
      );
    }
    return null;
  }
}

type PortalExampleState = {
  activePage: string
}

export class PortalExample extends React.Component<{}, PortalExampleState> {

  state: PortalExampleState = {
    activePage: 'main'
  }

  onChangeActivePage = (activePage: string) => {
    this.setState({
      activePage
    });
  }

  render() {
    const activePage = this.state.activePage;
    return (
      <>
        <Menu activePage={this.state.activePage} onActiveChange={this.onChangeActivePage} />

        { activePage === 'main' && <MainPage onChangeActivePage={this.onChangeActivePage} /> }
        { activePage === 'page1' && <Page1 onChangeActivePage={this.onChangeActivePage} /> }
        { activePage === 'page2' && <Page2 onChangeActivePage={this.onChangeActivePage} /> }
      </>
    );
  }
}

class MainPage extends React.Component<{
  onChangeActivePage: (activePage: string) => void
}> {
  render() {
    return (
      <div>
        <PageMenuItems>
          <button onClick={() => this.props.onChangeActivePage('page1')}>
            Page 1
          </button>
          <button onClick={() => this.props.onChangeActivePage('page2')}>
            Page 2
          </button>
        </PageMenuItems>
        Main page
      </div>
    );
  }
}

class Page1 extends React.Component<{
  onChangeActivePage: (activePage: string) => void
}> {
  render() {
    return (
      <div>
        <PageMenuItems>
          <button onClick={() => this.props.onChangeActivePage('page2')}>
            Page 2
          </button>
        </PageMenuItems>
        Page 1
      </div>
    );
  }
}

class Page2 extends React.Component<{
  onChangeActivePage: (activePage: string) => void
}> {
  render() {
    return (
      <div>
        <PageMenuItems>
          <button onClick={() => this.props.onChangeActivePage('page1')}>
            Page 1
          </button>
        </PageMenuItems>
        Page 2
      </div>
    );
  }
}
