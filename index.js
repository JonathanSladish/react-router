import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals from '../reportWebVitals';
import Navbar from './components/navbar';
import Home from './components/home';
import Menu from './components/menu';
import List from './components/list';
import About from './components/about';



class Routes extends Component {
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <hr />
          <Route name="Home" exact path="/" component={Home}/>
          <Route name="Menu" path="/menu" component={Menu}/>
          <Route name="About" path="/about" component={About}/>
          <Route name="List" path="/list" component={List}/>
         
         </div>
      </Router>
    )
    }
  }
  ReactDOM.render(<Routes />, document.getElementById ('root'));
