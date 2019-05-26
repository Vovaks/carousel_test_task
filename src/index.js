import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import DevTools from "mobx-react-devtools";
import {Provider} from "mobx-react";
import stores from './stores';
import Add from "./pages/Add"
import Home from "./pages/Home"
import 'bootstrap/dist/css/bootstrap.css';
import {Col} from 'reactstrap';

class App extends Component {

  render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <div className="App">
            <DevTools/>
            <Col sm="12" md={{size: 6, offset: 3}}>
              <header className="App-header">
                <h1>
                  Carousel Test Task
                </h1>
              </header>
            </Col>
            <Switch>
              <Route
                exact
                path="/"
                component={Home}
              />
              <Route
                exact
                path="/add"
                component={Add}
              />
              <Route
                exact
                path="/edit/:idx"
                component={Add}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
