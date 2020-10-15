import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import OrphanageMap from './pages/OrphanageMap'
import Orphanage from './pages/Orphanage'
import CreateOrphanage from './pages/CreateOrphanage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"component={Landing} />
        <Route path="/app"component={OrphanageMap} />
        <Route path="/orphanages/:id"component={Orphanage} />
        <Route path="/orphanages/create"component={CreateOrphanage} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes;