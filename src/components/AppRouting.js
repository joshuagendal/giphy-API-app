import React from 'react';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Giphys from './Giphys';
import Index from './Index';

class AppRouting extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/giphys">Giphys</Link>
            </li>
          </ul>

          <hr/>

          <Route path="/" component={Index}/>
          <Route path="giphys" component={Giphys}/>
        </div>
      </Router>
    );
  }
}

export default AppRouting;