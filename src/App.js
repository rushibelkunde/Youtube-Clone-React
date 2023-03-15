import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path='/search'>
      <Header />
          <div className="page">
            <Sidebar />
            <h1>SearchPage</h1>
            
          </div>
        
        </Route>
        
     
        <Route path='/'>
          <Header />
          <div className="page">
            <Sidebar />
            <Videos/>
            
          </div>
        </Route>
        



      </Switch>
      </Router>
    </div>
  );
}

export default App;
