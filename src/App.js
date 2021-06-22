import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './components/index.component';
import Details from './components/details.component';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Privacy from './components/privacy.component';

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container-fluid">
            <Link to={'/'} className="navbar-brand">Benefits Project</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbard-collapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collaapse collapse d-sm-inline-flex justify-content-between" id="navbarSupportedContent">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link text-dark">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link text-dark">Create</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <Switch>
              <Route exact path='/' component={ Index } />
              <Route path='/details/:id' component={ Details } />
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route exact path='/privacy' component={ Privacy } />
          </Switch>
        </div>
        <footer className="border-top footer text-muted">
          <div className="container-fluid">
            &copy; 2021 - Benefits Project - <Link className="link-light text-muted" to={'/privacy'}>Privacy</Link>
          </div>
        </footer>
      </Router>
    );
  }
}

export default App;