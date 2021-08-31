import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
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