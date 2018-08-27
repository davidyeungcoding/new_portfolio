import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';

const App = () => {
  <div>
    <Nav />
      <div>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route component={Landing} />
        </Switch>
      </div>
    <Footer />
  </div>
}

export default App;