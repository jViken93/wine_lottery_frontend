import React from 'react'

import Particpate from './pages/Participate'
import Winner from './pages/Winner'
import Participants from './pages/Participants'

import Navigator from './components/Navigator'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navigator />
      <Route path="/" exact>
        <Particpate />
      </Route>
      <Route path="/winner">
        <Winner />
      </Route>
      <Route path="/participants">
        <Participants/>
      </Route>
    </div>
  );
}
export default App;
