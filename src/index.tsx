import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Sponsors from './Pages/Sponsors/Sponsors';
import History from './Pages/History/History';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename={`/${process.env.PUBLIC_URL}`}>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Sponsors" exact component={Sponsors} />
            <Route path="/History" exact component={History} />
            <Route component={NotFound} />
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
