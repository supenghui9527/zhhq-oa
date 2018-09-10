import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail';
import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path='/' exact component={ Login }></Route>
              <Route path='/home' exact component={ Home }></Route>
              <Route path='/detail' exact component={ Detail }></Route>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;