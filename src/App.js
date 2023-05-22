import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';



function App() {
  return (
    <div className="App">
          <Header />
          <div className="page">
            <Sidebar />
            <Videos/>
          </div>
    </div>
  );
}

export default App;
