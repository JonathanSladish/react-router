import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals fromm '../reportWebVitals';

class Navbar extends Component {
    render(){
return( 
    <div className="nav>
    <Link to="/">Home</Link> |
    <Link to="/menu"> Menu</Link> |
    <Link to="/about"> About</Link> |
    <Link to="/list"> List</Link>
    </div>
)
    }

    }
    export default Navbar;
