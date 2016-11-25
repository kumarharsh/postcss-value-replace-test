import React from 'react';
import ReactDOM from 'react-dom';

import css from './app.css';

class App extends React.Component {
  render() {
    return React.createElement('div', {
      className: css.appContainer
    }, [
      "This is the App"
    ]);
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
