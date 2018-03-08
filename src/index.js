import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import actions from './actions';


import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './app/home.js';
import View from './app/view.js';
import './assets/app.css';

let store = createStore(
  reducers,
  applyMiddleware(thunk)
);

store.dispatch(actions.getNews());

class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/:id" component={View} />
          </div>
        </Provider>
      </Router>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
