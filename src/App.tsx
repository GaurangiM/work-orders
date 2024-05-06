import React from 'react';
import logo from './logo.svg';
import Filters from './components/filters';
import WorkOrder from './components/work-order';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Work orders overview</h1>
        <Filters/>
        <WorkOrder/>
      </header>
    </div>
  );
}

export default App;
