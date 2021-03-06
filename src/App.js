import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Mainpage from './components/pages/Mainpage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Mainpage />
        </Route>

        <Route path="/">
          <Mainpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
