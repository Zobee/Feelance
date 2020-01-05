import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import Header from './Components/Header'
import Home from './Components/Home'
import Samples from './Components/Samples'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Default from './Components/Default'


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/samples' component={Samples} />
        <Route path='/contact' component={Contact} />
        <Route component={Default} />
      </Switch>
    </div>
  );
}

export default App;
