import React from 'react'
import { Route } from 'react-router-dom'

import Particpate from './pages/Participate'
import Winner from './pages/Winner'
import Participants from './pages/Participants'
import Update from './pages/Update'

import Navigator from './components/Navigator'
import AdminNav from './components/AdminNav'




function App() {
  return (
    <div className="App">
      <Route path="/winner">
        <AdminNav />
        <Winner />
      </Route>
      <Route path="/update">
        <AdminNav />
        <Update />
      </Route>
      <Navigator />
      <Route path="/" exact>
        <Particpate />
      </Route>
      <Route path="/participants">
        <Participants/>
      </Route>
    </div>
  );
}
export default App;
