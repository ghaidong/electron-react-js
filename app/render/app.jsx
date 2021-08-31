import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/main.less'
import Root from './container/Root'

function App() {
  return (
    <Router>
      <Route component={Root} />
    </Router>
  )
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>这是 Electron + React </div>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));