import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Color from '../components/Color'

const RouteApp = () => (
    <Switch>
        <Route exact path="/" render={() => (<Redirect to="/color" />)} />
        <Route exact path="/color" component={Color} />
    </Switch>
)

export default RouteApp
