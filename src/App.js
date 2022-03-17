import React from 'react';
import './App.scss';

import {MainContent,Sidebar} from './components'

function App() {
  return (
    <div className="app">
      <div className="app__container">
          <div className="app__row">
              <div className="app__sidebar">
                <Sidebar />
              </div>
              <div className="app__maincontent">
                <MainContent />
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;