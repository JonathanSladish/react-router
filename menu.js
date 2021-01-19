import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals from '../reportWebVitals';

class Menu extends Component {
    render (){
        return (
            <div> 
<h1>Menu</h1>
<p>Check out our amazing 24/7 menu:
    <ul>
        <li>Lazy Loading</li>
        <li>Dynamic Route Matching</li>
        <li>Location Transition Handling</li>
    </ul>
</p>
</div>)
    }
}

export default Menu
