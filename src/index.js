import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import actions from './actions';

import Home from './app/home.js';
import './assets/app.css';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

store.dispatch(actions.getNews());

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
