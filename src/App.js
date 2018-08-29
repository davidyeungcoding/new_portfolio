import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HeadNav from './components/Nav';
import Footer from './components/Footer';
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
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;