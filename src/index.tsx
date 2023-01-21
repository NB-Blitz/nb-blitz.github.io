import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/Home';
import Sponsors from './Pages/Sponsors/Sponsors';
import History from './Pages/History/History';
import Mentors from './Pages/Mentors/Mentors';
import NotFound from './Pages/NotFound/NotFound';
import { HashRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Sponsors" exact component={Sponsors} />
            <Route path="/History" exact component={History} />
            <Route path="/Mentors" exact component={Mentors} />
            <Route component={NotFound} />
        </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
