import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import './assets/styles/global.css';
import About from './pages/About';
import Papers from './pages/Papers';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
  	<BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/sobre" component={About}></Route>
        <Route path="/papers" component={Papers}></Route>
        <Route path="/cursos" component={Courses}></Route>
        <Route path="/blog" component={Blog}></Route>
        <Route path="/contato" component={Contact}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
