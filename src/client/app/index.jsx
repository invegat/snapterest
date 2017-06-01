import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  getInitialState() {
    return {
      isHeaderHidden: false,
      title: 'Stateful React Component'
    }
  }
  handleClick() {
    this.setState({
      isHeaderHidden: !this.isHeaderHidden
    });
  }
  render() {
    const headerElement = React.createElement('h1',{classname: 'header',key: 'header'},this.state.title);
    const buttonElement = React.createElement('button',
      {classname: 'btn btn-default', onClick: this.handleClick, key:'button'},'Toggle header');
    if (this.state.isHeaderHidden) {
      return React.cloneElement('div',null,[HTMLButtonElement]);
    }
    //const header = this.props.tweets.length + ' Latest Tweets';
    return React.createElement('div', null, [buttonElement,headerElement]);
  }
}

render(<App />, document.getElementById('app'));