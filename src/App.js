import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeadNav from './components/Nav';
import Landing from './pages/Landing';
import './index.css';

class App extends Component {

  render() {
    return(
      <div>
        <HeadNav />
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Landing} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;