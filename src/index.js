import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, HashRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import Photos from './components/Photos.js'
import * as serviceWorker from './serviceWorker';

const store = configureStore()

render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/photos/:id" component={Photos}/>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
